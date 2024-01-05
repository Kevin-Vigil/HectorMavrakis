export default function scrollTrigger(selector, options, constant) {
  console.log("WTF")
  let eventListenerArr = document.querySelectorAll(selector)
  eventListenerArr = Array.from(eventListenerArr)
  console.log("Event Listener Array created")
  eventListenerArr.forEach(el => {
    console.log(el)
    constant ?
      addConstObserver(el, options) :
      addObserver(el, options);
  })
}

function addConstObserver(el, options) {
  console.log("Const Observer function entered")
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log("Test: " + entry.target.classList + " \tFor: " + entry.target.id)
      const intersecting = entry.isIntersecting
      if (intersecting){
        entry.target.classList.add("active-comp")
        entry.target.classList.remove("inactive-comp")
      }else{
        entry.target.classList.add("inactive-comp")
        entry.target.classList.remove("active-comp")
      }
    })
  },
  options);
  observer.observe(el)
}

function addObserver(el, options) {
  console.log("Observer function entered")
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