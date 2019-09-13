let menuHamburguer = document.querySelector('.menu-hamburguer');
let nav = document.querySelector('nav');

function mostrarMenu(){
    // nav.style.display ='block';

//     nav.classList.add('visivel');             (JEITO 1)
//     if(nav.classList.contains('visivel')){
//         nav.classList.remove('visivel');
//     }else{
//         nav.classList.add('visivel');
//     }
// }

// nav.classList.add('visivel');              (JEITO 2)
// if(!nav.classList.contains('visivel')){
//     nav.classList.add('visivel');
// }else{
//     nav.classList.remove('visivel');
    
// }

nav.classList.toggle('visivel');  //(JEITO 3), mais  facil que tudo!!!!
}
menuHamburguer.onclick = mostrarMenu;