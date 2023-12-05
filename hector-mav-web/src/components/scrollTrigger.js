


function scrollTrigger(selector, options={}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
        })
    })
    observer.observe(el)
}

//scrollTrigger('.scroll-reveal')