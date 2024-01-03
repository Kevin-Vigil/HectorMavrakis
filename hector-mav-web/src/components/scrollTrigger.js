


export default function scrollTrigger(selector, options, constant) {
  let eventListenerArr = document.querySelectorAll(selector)
  eventListenerArr = Array.from(eventListenerArr)
  eventListenerArr.forEach(el => {
    constant ?
      addConstObserver(el, options) :
      addObserver(el, options);
  })
}

function addConstObserver(el, options) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log("Test: " + entry.target.classList + " \tFor: " + entry.target.id)
      const intersecting = entry.isIntersecting
      intersecting ? entry.target.classList.add("active-comp") : entry.target.classList.remove("active-comp")

    })
  },
    options);
  observer.observe(el)
}

function addObserver(el, options) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Test: " + entry.target.classList + " \tFor: " + entry.target.id)
        entry.target.classList.add('active-comp')
        entry.target.classList.remove('active-listener')
        observer.unobserve(entry.target)
      }
    })
  },
    options);
  observer.observe(el)
}

//scrollTrigger('.scroll-reveal')