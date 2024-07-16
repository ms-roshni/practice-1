const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display mobile menu:
// write a function(mobileMenu) that adds a class(.active) when hamburger is clicked..
// the class is added to the code which makes the dropdown visible.
const mobileMenu = ()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu);

// show active menu when scrolling:
const highlightMenu = ()=>{
    const scrollerDash = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home_page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);

    // Adds the highlight class to my menu items
    if(window.innerWidth > 960 && scrollPosition < 600){  // show purple dash highlights only in desktop
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPosition < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('hightlight');
        servicesMenu.classList.remove('hightligh');
        return;
    }else if(window.innerWidth > 960 && scrollPosition < 2345){
        servicesMenu.classList.add('hightligh');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth<960 && scrollPosition<600 ) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

// close mobile menu on clicking on an item
const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }    
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
