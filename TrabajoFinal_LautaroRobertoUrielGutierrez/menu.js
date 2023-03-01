const Menu = document.querySelector('.Menu')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(Menu)


Menu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})