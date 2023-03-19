const toggleBtn = document.getElementById('toggle-btn')
const toggleIcon = document.querySelectorAll('.toggle-icon')
const mobileMenu = document.getElementById('mobile-menu')

toggleBtn.addEventListener('click', () => {
  toggleIcon.forEach((icon) => {
    icon.classList.toggle('block')
    icon.classList.toggle('hidden')
  })

  mobileMenu.classList.toggle('flex')
  mobileMenu.classList.toggle('hidden')
})
