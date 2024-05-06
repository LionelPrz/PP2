// Barra de navegacion Responsive

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const footer = document.getElementById('footer');
const menuLinks = document.querySelectorAll('.nav-menu a[href^=\"#\"]');
const carta1 = document.getElementById('card1');
const carta2 = document.getElementById('card2');
const carta3 = document.getElementById('card3');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const cardValue = document.querySelectorAll('button a[id]');
const nightMode  = document.getElementById('btn-nightMode');


console.log(cardValue);

const temaOscuro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    nightMode.removeAttribute("class","bi bi-toggle2-off");
    nightMode.setAttribute("class","bi bi-toggle2-on");
}
const temaClaro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme","light");
    nightMode.removeAttribute("class","bi bi-toggle2-on");
    nightMode.setAttribute("class","bi bi-toggle2-off");
}

const cambiarTema = ()=>{
    document.querySelector("body").getAttribute("data-bs-theme")==="light"?
    temaOscuro() : temaClaro() ;
}

nightMode.addEventListener('click',()=>{
    cambiarTema();
});


//Funcion para determinar que oferta es seleccionada

    cardValue.forEach(promocion=>{
        promocion.addEventListener('click',function(e){
            let card_id;
                card_id =  e.target.id;
                 localStorage.setItem('promos',card_id);
                 console.log(card_id);
        })
    })

//Funcion para resolver el problema del nav con el footer
    function agregadoFooter(){
        footer.style.display = "block";
}
    function eliminacionFooter(){
        footer.style.display = "none";
}
