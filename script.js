const toggle = document.querySelector('.toggle')
const planPriceMonthly = document.querySelectorAll('.plan-price-monthly')
const planPriceAnnually = document.querySelectorAll('.plan-price-annually')

// Initial state
planPriceMonthly.forEach(price => price.classList.add('toggle-on'))

toggle.addEventListener('change', e => {
  // Add and remove class in certain condition
  if (e.target.checked) {
    planPriceMonthly.forEach(price => price.classList.remove('toggle-on'))
    planPriceAnnually.forEach(price => price.classList.add('toggle-on'))
  } else {
    planPriceAnnually.forEach(price => price.classList.remove('toggle-on'))
    planPriceMonthly.forEach(price => price.classList.add('toggle-on'))
  }
})
