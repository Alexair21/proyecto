//Animamos al menu para que cuando bajemos se quede estatico

window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }

}




document.getElementById("bt_menu").addEventListener("click", mostrar_menu);
menu=document.getElementById("header");
nav=document.getElementById("nav");
body=document.getElementById("cont__portada");

function mostrar_menu(){
    menu.classList.toggle('move');
    body.classList.toggle('move');
    nav.classList.toggle('move_nav');
}




oscuro=document.getElementById("btn_osc");
function modoscuro(){
    oscuro.classList.toggle('osc');
    
}