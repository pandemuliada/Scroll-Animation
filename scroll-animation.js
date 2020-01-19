let scrollAnimationElements = document.querySelectorAll('[data-san]');

let options = {
  rootMargin: '0px',
  threshold: .5
}

let scrollAnimationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add class to entry
      entry.target.classList.add(entry.target.dataset.san)

      // Remove the data-san attribute after 3.5 second the animation occur 
      // Remove this line below if you dont wanna remove the data-san attribute
      setTimeout(() => {
        entry.target.removeAttribute('data-san')
      }, 2000)

      // Unobserve the entry to prevent infinite loop observing
      scrollAnimationObserver.unobserve(entry.target)
    }
  })
}, options)


scrollAnimationElements.forEach(scrollAnimationElement => {
  scrollAnimationObserver.observe(scrollAnimationElement)
})