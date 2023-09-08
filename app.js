//capturando div padre

const container = document.getElementById('padre');
console.log(container);

const contenedorHijo = document.getElementById('hijo');
const contenedorNieto = document.getElementById('nieto');



container.addEventListener('click', (e) => {
    // console.log(e.target.id);

    if (e.target.id === 'padre') {
        console.log("diste click al elemento padre");

    }

    if (e.target.matches(".border-secundary")) {
    console.log("diste click al elemento hijo");
    }

    if (e.target.dataset.div === 'divNiete') {
    console.log("diste click al elemento nieto");}

    // console.log(e.target.matches(".border-secundary")); //devuelve un true para el elemento seleccionado

    // console.log(e.target.dataset.div);



});