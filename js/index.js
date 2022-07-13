//Agregando DOM al proyecto / lo hice en otra página para que quedara mas prolijo

//Aqúi agregué elementos al HTML y también Modifico 
let titulo = document.getElementById("titulo");
titulo.innerText="Tienda Virtual !"


let comentario = document.getElementById("comentario");
comentario.innerHTML="Gracias por tu compra! Tus productos serán despachados a la brevedad. "

//interactuación con un array para opciones de despacho 

let despacho = document.getElementById("provincias");
let provincias = ["Cordoba","Rosario","Capital Federal","CABA"];

for (let provincia of provincias){
    var elemento = document.createElement("li");
    elemento.innerHTML = provincia;
    despacho.appendChild(elemento);
}



//al agregar esta nueva parte no me aparecen las ediciones hechas arriba, 
//si pongo la consola si aparecen , solo no se ven en la página
//Ejemplo Aplicado de Plantillas Litrales e InnerHTMl para crear 4 tarjetas de productos

const productos = [{id:1 ,nombre:"GeForce GTX 1660 SUPER Twin Fan Black", imagen:"./images/placa1.jpg", precio:54000},
                  {id:2 ,nombre:"monitor zowie by benq 144hz", imagen:"./images/monitor.jpg", precio: 24900},
                  {id:3 ,nombre:"nootbook asus", imagen:"./images/notebook.jpg", precio: 80000},
                  {id:4 ,nombre:"Placa de Video Asrock RX 570 8GB GDDR5 ", imagen:"./images/placa2.jpg", precio: 67000}
                ];

let boton =  document.getElementById("boton");     

boton.addEventListener("click", function(){

    for (const producto of productos) {
           const contenedor = document.getElementById("tarjetas");
           let tarjetas = document.createElement("div");
           tarjetas.className = "col-3 d-flex justify-content-center";
           tarjetas.innerHTML = `<div class="card" style="width: 18rem;">
                                   <img src='${producto.imagen}' class="card-img-top" alt="..."></img>
                                   <div class="card-body">
                                   <h5 class="card-title">ID: ${producto.id}</h5>
                                   <p class="card-text"> Producto: ${producto.nombre}</p>
                                   <p class="card-text">$ ${producto.precio}</p>
                                   <a href="#" class="btn btn-primary">Agregar</a>
                                   </div>
                                </div>`;
    contenedor.appendChild(tarjetas);
    }            
});

function actualizsarButomcarrito (){
    <button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">Tu carrito</span>
  </span>
</button>
}

guardarProductosLS(productos);
renderProductos();

    



