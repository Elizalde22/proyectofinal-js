

//capturas DOM
let buscador = document.getElementById("buscador")
let product = document.getElementById("product")
let modal = document.getElementById("modal-body")

for(let productos of gondola){
  let nuevoProducto = document.createElement("div")
  nuevoProducto.innerHTML = `<article id="${productos.id}" class="card">
  <h3 class="tituloCard">${productos.nombre}</h3>
  <img src="/image/${productos.imagen}"  alt="${productos.titulo}">
                                <div class="content">
                                    <p class="autorCard">${productos.marca}</p>
                                    <p class="precioCard">Precio: ${productos.precio}</p>
                                    <button id="agregarBtn${productos.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                </div>
                            </article>`
    product.appendChild(nuevoProducto)
    let btnAgregar = document.getElementById(`agregarBtn${productos.id}`)
    btnAgregar.addEventListener("click", ()=>{sumarCarrito(productos)})
  }
  
  //operador 
  let llenarCarrito = JSON.parse(localStorage.getItem("carrito")) || []
//function sumarCarrito
function sumarCarrito (productos){
llenarCarrito.push(productos)
localStorage.setItem("carrito", JSON.stringify(llenarCarrito))
Swal.fire({
    title: "Se agrego el producto al carrito",
    icon: "success",
})
}
