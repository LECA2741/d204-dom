let menuHamburguer = document.querySelector('.menu-hamburguer');
let nav = document.querySelector('nav');
let input = document.querySelector('input');
let botao = document.querySelector('button');
let h2 = document.querySelector('h2');

function mostrarMenu(){
    // nav.style.display ='block'; -> /*faz modificações nos arquivos HTML, mas não modifica o próprio documento. Tudo é                                                             feito pelo script.*/

//     nav.classList.add('visivel');        (JEITO 1) -> /*faz modificações no css e neste caso, el aparece no                                                                                      documento*/
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

nav.classList.toggle('visivel');            //<--(JEITO 3), mais  facil que tudo!!!!

menuHamburguer.classList.toggle('ativo');     // <--esse vai servir pra        
}

function pegarNome(){
    let nome = input.value;
h2.innerHTML = `Seja bem vindo(a)! ${nome}` ;

input.value = '';   /* <--- serve pra pessoa digitar algo */       
}

menuHamburguer.onclick = mostrarMenu;
botao.onclick = pegarNome;