console.log("vinculado");

//capturando cosas

const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const btnProductos = document.querySelectorAll(".card .btn");
console.log(btnProductos);

//creando el fragment para evitar el reflow
const fragment = document.createDocumentFragment();

//objeto carrito
const objetoCarrito = [];



//funcion agregar productos al carrito

const agregarCarrito = (evento) =>{
    // console.log(evento);
    console.log(evento.target.dataset.fruta); //mostrando en contenido de cada boton
    const producto = { //creando objeto para ir guardando en el array objeto carrito
        nombre: evento.target.dataset.fruta,
        id: evento.target.id,
        cantidad: 1
    };

    const index = objetoCarrito.findIndex(item => item.id === producto.id);
    console.log(index);

    if (index !== -1){
       objetoCarrito[index].cantidad++; // si el item en el array objetoCarrito ya se encuenta , la cantidad del item con el mismo index aumenta
       console.log(objetoCarrito[index].cantidad);
    }else{
        objetoCarrito.push(producto);//caso contrario, no se encuentra producto en el carrito. Entonces se agrega
    };

    console.log(objetoCarrito);

    pintarCarrito(objetoCarrito);

};

// evento click boton agregar

btnProductos.forEach(btn =>{
    // console.log(btn);
    btn.addEventListener("click",agregarCarrito);//agregando evento a cada boton
});

//pintar carrito

const pintarCarrito = (arrayProductosAgregados) =>{

    carrito.textContent = null; //vacio para que no se repita todos los elementos agregados antes

    arrayProductosAgregados.forEach(item => { 
        console.log(item);

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);

    });

    carrito.appendChild(fragment);
};