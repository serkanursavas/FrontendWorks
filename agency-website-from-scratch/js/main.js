const toggle = document.querySelector('.toggle')
const navi = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navi.classList.toggle('active')
})