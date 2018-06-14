var scrollUpButton = document.querySelector('#backtotop')

scrollUpButton.addEventListener('click', function(event) {
  event.preventDefault()
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})
