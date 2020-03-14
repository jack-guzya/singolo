 const NAVIGATION = document.querySelector('ul.navigation')

 NAVIGATION.addEventListener ('click', (event) => {
    NAVIGATION.querySelectorAll('li').forEach(elem => elem.classList.remove('navigation_active'))
    event.target.closest('li').classList.add('navigation_active')
 })