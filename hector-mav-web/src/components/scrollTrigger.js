


export default function scrollTrigger(selector, options) {
  let eventListenerArr = document.querySelectorAll(selector)
  eventListenerArr = Array.from(eventListenerArr)
  eventListenerArr.forEach(el => {
    addObserver(el, options)
  })
}

function addObserver(el, options) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry =>{
      const intersecting=entry.isIntersecting
      intersecting? entry.target.classList.add("active-comp"): entry.target.classList.remove("active-comp")
    })
  },
  options);
  observer.observe(el)
}

//scrollTrigger('.scroll-reveal')