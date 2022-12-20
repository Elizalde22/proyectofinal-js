//objetos

class Productos {
    constructor(id, nombre, precio, peso, marca, sueltoEnvase, imagen) {
            this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.peso = peso,
            this.marca = marca,
            this.sueltoEnvase = sueltoEnvase,
            this.imagen = imagen
    }
}

const alfajor = new Productos(1, "Alfajor", 150, "50gr", "Animal kind", "Envasado", "alfajor.jpg")
const granola = new Productos(2, "Granola", 200, "100gr", "Lasfor", "Suelto", "granola.jpg")
const nueces = new Productos(3, "Nueces", 250, "100gr", "LG", "Suelto", "nueces.jpg")
const hamburguesa = new Productos(4, "Hamburguesas", 600, "320gr", "Caseriana", "Envasado", "hamburguesas.jpg")
const canelones = new Productos(5, "Canelones", 880, "600gr", "Il toscano", "Envasado", "canelones.jpg")
const tartas = new Productos(6, "Tartas", 680, "380gr", "Chuño", "Envasado", "tarta.jpg")

//Carga de productos
const gondola =[alfajor, granola, nueces, hamburguesa, canelones, tartas ]
