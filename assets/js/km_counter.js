const km_counter = document.querySelector('.km-counter')

class Counter {

    constructor({duration = 200} = {}){
        this.duration = duration
        
    }

    
    

    animateCounter(elm){
        const target = +elm.getAttribute('data-target')
        const increment = target / this.duration
    
        let currentCount = 0
        
    
        const updateCounter = ()=>{
    
            currentCount += increment
    
            if(target > currentCount){
                elm.textContent = Math.ceil(currentCount)
                requestAnimationFrame(updateCounter)
            }else{
                elm.textContent = target
            }
        }
    
        updateCounter()
    }
    
}

// ✅ Create instance
const counter = new Counter({ duration: 200 });

const observer = new IntersectionObserver((entries, observer)=>{

    entries.forEach(entry => {

        if(entry.isIntersecting){
            const counters = entry.target.querySelectorAll('.count-item')

            counters.forEach(counterElm => {
                
               counter.animateCounter(counterElm)
                
            })

            observer.unobserve(entry.target)
        }
        

    })
    
    


},{threshold: 0.8})


observer.observe(km_counter)