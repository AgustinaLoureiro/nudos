//Carrito de compras:

const carrito = []


//Creacion de articulos:

class Articulo {
    constructor(id, seccion, img, nombre, precio) {
        this.id = id;
        this.seccion = seccion;
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const tapizValencia = new Articulo ('TS01', 'tapices', './img/01a_tapiz_simple_20.jpg', 'Tapiz Valencia 20cm', 1800)
const tapizMalaga = new Articulo ('TS02', 'tapices', './img/01b_tapiz_simple_40.jpg', 'Tapiz Málaga 40cm', 4000)
const tapizSevilla = new Articulo ('TS03', 'tapices', './img/01c_tapiz_simple_60.jpg', 'Tapiz Sevilla 60cm', 6000)
const tapizToledo = new Articulo ('TS04', 'tapices', './img/01d_tapiz_simple_80.jpg', 'Tapiz Toledo 80cm', 10000)
const tapizZaragoza = new Articulo ('TS05', 'tapices', './img/01e_tapiz_simple_100.jpg', 'Tapiz Zaragoza 100cm', 15000)

const tapices = [tapizValencia, tapizMalaga, tapizSevilla, tapizToledo, tapizZaragoza]
console.log (tapices)



//Tarjetas de articulos:

const catalogoDOM = document.querySelector('#tarjetasTapices')
tapices.forEach((tapiz) => {
    const tarjetaDeArticulo = document.createElement('div')
    tarjetaDeArticulo.classList.add('tarjetaDeArticulo')
    tarjetaDeArticulo.innerHTML = `
        <img class="tarjetaDeArticulo__img" src="${tapiz.img}" alt="">
        <h5 class="tarjetaDeArticulo__title">${tapiz.nombre}</h5>
        <h5 class="tarjetaDeArticulo__price">Precio $${tapiz.precio}</h5>
        <div class="tarjetaDeArticulo__seleccion">
            UNIDADES
            <div class="contador" id="contador${tapiz.id}">
                <button id="eliminar${tapiz.id}">-</button>
                <p id="seleccionUnd${tapiz.id}">0</p>
                <button id="agregar${tapiz.id}">+</button>
            </div>
        </div>
        <button class="add2Cart" id="alCarrito${tapiz.id}">AGREGAR AL CARRITO</button>
    `

    catalogoDOM.appendChild(tarjetaDeArticulo)

    let numero = 0;
    const undSeleccionadas = document.getElementById(`seleccionUnd${tapiz.id}`);
    const disminuirUnd = document.getElementById(`eliminar${tapiz.id}`);
    const incrementarUnd = document.getElementById(`agregar${tapiz.id}`);

    disminuirUnd.onclick = () => {
        if (numero > 0) {
            numero--;
            undSeleccionadas.innerText = numero;
        }
    }

    incrementarUnd.onclick = () => {
        numero++;
        undSeleccionadas.innerText
        const anadirProd= document.getElementById(`alCarrito${tapiz.id}`)
        anadirProd.onclick=()=>{
            if(numero !==0){
                carrito.push(tapiz)
                console.log(carrito)
            } else {
                alert('Ingrese una cantidad correcta')
            }
        }
    }

})

const finalizar = document.getElementById('cerrarCarrito')
finalizar.onclick = () => {
    if (carrito.length !== 0) {
        let totalcompra = 0
        let subtotal = 0
        for (let i = 0; i < carrito.length; i++) {
            subtotal += carrito[i].precio * carrito[i].cantidad;
        }
        console.log(`Total: $${subtotal}`)
        const seccionCompras = document.getElementById('cart')
        seccionCompras.innerHTML = `
            <p>Carrito de Compras</p>
            <p>El Total de su compra es de $${subtotal}</p>
        `
    }
}