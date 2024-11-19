// index.js
import "./styles.css";
import  home  from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

function clearWindow(){
    const content = document.querySelector('#content');
    content.innerText = '';
}

document.addEventListener('DOMContentLoaded', ()=>{
    home();

    const homePage = document.querySelector('#homeBtn');
    const menuPage = document.querySelector('#menuBtn');
    const aboutPage = document.querySelector('#aboutBtn');
    
    homePage.addEventListener('click', ()=>{
        clearWindow();
        home();
    })

    menuPage.addEventListener('click', ()=>{
        clearWindow();
        menu();
    })

    aboutPage.addEventListener('click', () => {
        clearWindow();
        about();
    })
})
