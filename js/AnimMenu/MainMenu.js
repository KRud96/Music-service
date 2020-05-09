const navToggle = document.querySelector("#nav-toggle")
const menuIcon = document.querySelector(".menu-icon")
const menuContainer = document.querySelector(".nav-menu-container")
const navList = document.querySelector('.nav-list')

menuIcon.addEventListener('click', (evt) => {
    evt.preventDefault()
    navToggle.classList.toggle('active')
    menuContainer.classList.toggle('active')
    navList.classList.toggle('active')
})