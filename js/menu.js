let navBar = document.querySelector('#header')

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY
    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else{
        navBar.classList.remove('rolar')
    }
})

// ----------------------------------------------------------

let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')

document.addEventListener('click', ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
})
