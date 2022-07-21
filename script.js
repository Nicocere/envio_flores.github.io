let stockProductos = [
    {id: 1, producto: true, nombre: "Caja Rosas Diamante & Ferrero Rocher", categoria: ["Rosas", "Todos"] , opciones:[
            { tamaño: 12,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 6500}, 
    
            { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 8500}, 
            
            { tamaño: 24,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 12500}, 
    
            ], tipo: "caja",  flor: "rosas", stock: 1, descr: "Caja con rosas Diamante y Ferrero Rocher" , img: 'imagenes/PRODUCTOS/caja_rosasdiamante_ferrero.jpg'},
        
        
    {id: 2, producto: true, nombre: "Caja Rosas & Ferrero", categoria: ["Rosas", "Todos"] , opciones:[
            { tamaño: 12,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 5500}, 
    
            { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 7500}, 
            
            { tamaño: 24,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 12500}, 
    
            ], tipo: "caja", flor: "rosas",  stock: 1, descr: "Caja 18 rosas Ferrero" , img: 'imagenes/PRODUCTOS/Caj18RosFer.jpg'},
        
    {id: 3, producto: true, nombre: "Caja Rosas rosadas", categoria: ["Rosas", "Todos"] , opciones:[
                { tamaño: 12,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: 18,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 500}, 
                
                { tamaño: 25,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 13500}, 
        
                ],  tipo: "caja",  flor: "rosas",  stock: 1, descr: "Caja 25 rosas rosadas" , img: 'imagenes/PRODUCTOS/Caj25ROS_ROSADAS.jpg'},
        
    {id: 4, producto: true, nombre: "Corazon de rosas y ferrero rocher", categoria: ["Rosas", "Todos"] , opciones:[
                { tamaño: 20,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 11500}, 
        
                { tamaño: 30,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 17250}, 
                
                { tamaño: 40,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 23000}, 
        
        ], tipo: "arreglo floral", flor: "rosas", stock: 1, descr: "Corazon de rosas y ferrero rocher", img: 'imagenes/PRODUCTOS/corazon_ferrero_Rosas.jpg'},
        
    {id: 5, producto: true, nombre: "Caja de Rosas c/ Ferrero Rocher", categoria: ["Rosas", "Todos"], opciones:[
                { tamaño: 20,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 11500}, 
        
                { tamaño: 35,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 19500}, 
                
                { tamaño: 50,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 28500}, 
                
        
        ], tipo: "caja",  flor: "rosas",   stock: 1, descr: "caja de 50 rosas con ferrero rocher" , img: 'imagenes/PRODUCTOS/Caj50RosFer.jpg'},
        
    {id: 6, producto: true, nombre: "Mini Caja Rosas c/ Peluche", categoria: ["Rosas", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 4500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 6500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 18500}, 
    
        ],  tipo: "caja",  flor: "rosas",   stock: 1, descr: "Mini caja rosas con peluche" , img: 'imagenes/PRODUCTOS/mini_Caja_rosas_peluche.jpg'},
        
    {id: 7, producto: true, nombre: "Florero con Rosas, Lilium y Gerberas", categoria: ["Rosas", "Florero", "Todos"], opciones:[
        { tamaño: "Standard",
        color: ["rosas","rojas","amarillas","blancas"],
         precio: 5500}, 
    
        { tamaño: "Premium",
        color: ["rosas","rojas","amarillas","blancas"],    
        precio: 7500}, 
        
        { tamaño: "Deluxe",
        color: ["rosas","rojas","amarillas","blancas"], 
        precio: 11800}, 
    
        ], tipo: "florero", stock: 1, descr: "Florero con rosas, lilium y gerberas" , img: 'imagenes/PRODUCTOS/florero_rosas_gerberas_lilium.jpg'},
        
    {id: 8, producto: true, nombre: "Florero con rosas en papel italiano",categoria: ["Rosas", "Florero", "Todos"], opciones:[
                
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
        
       ], tipo: "florero", stock: 1, descr: "Florero con rosas en papel italiano" , img: 'imagenes/PRODUCTOS/florero_imperial_rosas.jpg'},
        
    {id: 9, producto: true, nombre: "Florero con Rosas", categoria: ["Rosas", "Florero", "Todos"], opciones: [
                { tamaño: 12,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: 18,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 24,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
        
        ],tipo: "florero",  stock: 1, descr: "Florero con rosas rosadas" , img: 'imagenes/PRODUCTOS/florero_rosas_rosadas.jpg'},
        
    {id: 10, producto: true, nombre: "Florero con Lisianthus", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
            
        ] , tipo: "florero",  stock: 1, descr: "Florero con lisianthus ", img: 'imagenes/PRODUCTOS/florero_lishiantus.jpg'},
        
    {id: 11, producto: true, nombre: "Ramo de Rosas Europeo", categoria: ["Rosas","Ramos", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 12500}, 
    
        ],tipo: "florero",  stock: 1, descr: "Ramo de Rosas Europeo" , img: 'imagenes/PRODUCTOS/ramo_rosas_europeo.jpg'},
        
    {id: 12, producto: true, nombre: "Exquisito Florero", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
        ], tipo: "florero",  stock: 1,  descr: "Exquisito florero" , img: 'imagenes/PRODUCTOS/exquisito_florero.jpg'},
        
    {id: 13, producto: true, nombre: "Florero con Gerberas", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "florero", stock: 1, descr: "florero con gerberas" , img: 'imagenes/PRODUCTOS/florero_gerberas.jpg'},
        
    {id: 14, producto: true, nombre: "Florero de Liliums", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","blancas"],
                precio: 12500}, 
    
        ],tipo: "florero",  stock: 1, descr: "florero de 6 liliums" , img: 'imagenes/PRODUCTOS/Florero_6_lilium.jpg'},
        
    {id: 15, producto: true, nombre: "Florero con Rosas y Astromelias", categoria: ["Rosas","Florero", "Todos"],  opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "florero", stock: 1, descr: "florero con rosas y astromelias" , img: 'imagenes/PRODUCTOS/florero_rosas_astromelias.jpg'},
        
    {id: 16, producto: true, nombre: "Canasta de Rosas con Bombones", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 12500}, 
    
        ], tipo: "canasta",  stock: 1, descr: "Canasta de Rosas con Bombones" , img: 'imagenes/PRODUCTOS/canasta_24_rosas_con_bombones.jpg'},
        
    {id: 17, producto: true, nombre: "Canasta de Rosas Sin Bombones", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 5500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 7500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 11500}, 
    
        ], tipo: "canasta", stock: 1, descr: "Canasta de Rosas Sin Bombones", img: 'imagenes/PRODUCTOS/canasta_24_rosas_sin_bombones.jpg'},
        
    {id: 18, producto: true, nombre: "Canasta con Flores Blancas de Estacion", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "canasta", stock: 1, descr: "canasta con flores blancas de estacion", img: 'imagenes/PRODUCTOS/canasta_floresblancas_Estacion.jpg'},
        
    {id: 19, producto: true, nombre: "Canasta de Gerberas y Rosas", categoria: ["Rosas", "Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "canasta",  stock: 1, descr: "canasta de gerberas y rosas" , img: 'imagenes/PRODUCTOS/canasta_gerberas_rosas.jpg'},
        
    {id: 20, producto: true, nombre: "Canasta Rosas y Lilium", categoria: ["Rosas", "Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 12500}, 
    
        ], tipo: "canasta",  stock: 1, descr: "canasta rosas y lilum" , img: 'imagenes/PRODUCTOS/canasta_rosas_lilium.jpg'},
        
    {id: 21, producto: true, nombre: "Canasta de Jazmines", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ],tipo: "canasta",  stock: 1, descr: "canasta de jazmines" ,  precio: 3000, img: 'imagenes/PRODUCTOS/canasta_jazmines.jpg'},
        
    {id: 22, producto: true, nombre: "Bandeja Comestible te quiero", categoria: ["Comestible", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "comestible", stock: 1, descr: "bandeja comestible te quiero" ,  precio: 4500, img: 'imagenes/PRODUCTOS/bandeja_te_quiero.jpg'},
        
    {id: 23, producto: true, nombre: "Desayuno", categoria: ["Desayuno", "Todos"],opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "comestible", stock: 1, descr: "desayuno" ,  precio: 5000, img: 'imagenes/PRODUCTOS/desayuno.jpg'},
    ];
    
    

//ARRAY CARRITO VACIO

let carrito = [] 


//inicio del DOM cuando se actualiza la pagina, queda guardado el carrito actualizar
document.addEventListener('DOMContentLoaded', () => {
   
//     //FETCH QUE TRAE 
//     fetch("data.js")
//   .then(response => response.json())
//   .then(data => console.log("ESTE ES EL DATA DE JSON",data));


    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
         actualizarCarrito()
    }
    //Funcion que carga los productos, le paso param array de productos
    loadProducts(stockProductos)
})




//CONSTANTES  del carrito

const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
let precioTotal = document.getElementById('preciototal')



//Variable  DEL MAIN CONTENEDOR PRODUCTOS 
let contenedorProducto = document.getElementById("productos");
const contenedorCarrito = document.getElementById('carrito-contenedor')



//CONSTANTES PARA ABRIR Y CERRAR CARRITO
const comprar = document.getElementsByClassName('comprar')[0]
const botonAbrir = document.getElementById('boton-abrircarrito')
const botonCerrar = document.getElementById('carritoCerrar')
const carritoDeCompra = document.getElementsByClassName('carritodecompra')[0]






botonAbrir.addEventListener('click', ()=>{
    comprar.classList.toggle('comprar-active')
})
botonCerrar.addEventListener('click', ()=>{
    comprar.classList.toggle('comprar-active')
})

botonVaciar.addEventListener('click', () => {
   
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas seguro de que queres vaciar el Carrito?',
        text: "Eliminaras todos los productos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, vaciar carrito!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
        width: 600,
      }).then((result) => {
        if (result.isConfirmed) {
           
            
            swalWithBootstrapButtons.fire(
                'Carrito Vaciado!',
                'Eliminaste todos los productos del carrito',
                'success'
                )
                carrito.length = 0
                actualizarCarrito()
        } else if (
       
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'Tu Carrito sigue intacto:)',
            'error'
          )
        }
      })  
})

comprar.addEventListener('click', (event) =>{
    comprar.classList.toggle('comprar-active')

})
carritoDeCompra.addEventListener('click', (event) => {
    event.stopPropagation() 
})


//CATEGORIAS 

//Constantes Categoria Active
let btnCategoria = document.querySelectorAll('.category_item')
let categoryList = document.getElementById('category_list')
let category = document.getElementById('Categoria')

console.log("CATEGORY", category)
console.log("CATEGORY LIST", categoryList)
console.log("BTN CATEGORIA ", btnCategoria)


    
category.addEventListener('click', () =>{
        console.log("HICISTE CLIC EN CATEGORIA", category)

        category.classList.toggle('arrow');

    
        categoryList.classList.toggle('categoryList-active')

            let height = 0;
            let menuCategoria = category.nextElementSibling;

            console.log(" MENU CATEGORIA SIN EL SCROLL", menuCategoria)
            console.log("MENU CATEGORIA", menuCategoria.scrollHeight) 

            if (menuCategoria.clientHeight == "0"){
                height = menuCategoria.scrollHeight;
                posicion = menuCategoria.style.position
            }
            menuCategoria.style.height = `${height}px`

         
            
        
        });

        

let categoria = (clicked_id) => {


    
    let categoryArray = []
    
    console.log("ID ", clicked_id)



    categoryArray = stockProductos.filter((prod) => prod.categoria.includes(clicked_id))
    
    console.log("Category array ",categoryArray)
    
    loadProducts(categoryArray)


}




//DECLARACION DE LA FUNCION LOADPRODCUT QUE TIENE EL FOREACHFOREACH QUE LEE EL ARRAY QUE RECIBE POR PARAMETRO

let loadProducts = (arrayData) => {
    console.log("Array de loadProducts", arrayData)

    
    // ACA VA EL  CONDICIONAL QUE PARA CUANDO TOQUE CADA CATEGORIA SE LIMPIE Y PINTE OTRO HTML

    if (categoria){


        contenedorProducto.innerHTML="" 


        arrayData.forEach(producto => {
            
            const div = document.createElement('div')
            div.classList.add('product-item')
        div.innerHTML = `
        <img src=${producto.img} alt="">
        <h4 class="tituloProducto">${producto.nombre}</h4>
        
        <h6 class="elijaTamaño">Elija un Tamaño</h6>
        
<select  id="select${producto.id}" class="opcionTam"  > 

<option value="${producto.opciones[0].tamaño}">${producto.opciones[0].tamaño}</option>
<option value="${producto.opciones[1].tamaño}">${producto.opciones[1].tamaño}</option>
<option value="${producto.opciones[2].tamaño}">${producto.opciones[2].tamaño}</option>
</select>    

<p id="precioProd${producto.id}" class="precioProd"> </p>

<button id="agregar${producto.id}" class="button-add" onclick="agregar()" >Agregar producto <i class='fas fa-shopping-cart'></i></button>
        
<div id="botones-producto">    
        
</div>

`
contenedorProducto.appendChild(div)

const item2 = stockProductos.find((prod) => prod.id === producto.id)

let mostrarPrecio = document.getElementById(`precioProd${producto.id}`);
mostrarPrecio.innerHTML = `Precio: $ ${producto.opciones[0].precio}`


// Evento que escucha el cambio de producto 
let selectTag = document.getElementById(`select${producto.id}`)
selectTag.addEventListener("change", function(){
    
    
    //Opcion ya predeterminada en la opcion
    let optionSelect = document.getElementById(`select${producto.id}`).value
    
    // obtengo el precio de la opcion seleccionada haciendo un filter en el array opciones
         let precio = item2.opciones.filter(obj => obj.tamaño == optionSelect)[0].precio
         
         // creo la propiedad opcion seleccionada // el valor del tamaño (12, standar, deluxe, etc)
         item2.selectValue = optionSelect; 
         
         
         console.log("OPTION SELECT", optionSelect)
         
         // creo la propiedad precio seleccionado
         producto.precioSeleccionado = precio
    
         //Muestro el precio del producto
         mostrarPrecio.innerHTML = `Precio: $ ${producto.precioSeleccionado}`
         
        })
        

//Buscador de productos
buscador = document.getElementById('buscarProducto')

    buscador.addEventListener('keyup', e =>{

        if(e.target.matches('#buscarProducto')){

            document.querySelectorAll('.product-item').forEach(prodBuscado => {

                prodBuscado.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?prodBuscado.classList.remove('buscadorFiltrado')
                :prodBuscado.classList.add('buscadorFiltrado')
            })
        }
})




        //BOTONES ACCIONES
        const botonesProducto = document.getElementById ('botones-producto')
        let agregar = document.getElementById(`agregar${producto.id}`)
        
        
        //BOTON AGREGAR AL CARRITO
        agregar.onclick = () => {
        console.log("tocaste en agregar")
        
        Swal.fire({
            title: 'Agregaste un Producto!',
        text: `${producto.nombre}`,
        position: 'top-end',
        icon: 'success',
        iconColor: 'rgb(216, 8, 216)',
        showConfirmButton: false,
        timer: 1500,
        width: 505,
        
    })
    
    
    agregarAlCarrito(producto.id)
    actualizarCarrito()
}

});

// fin cierre condicional 

} 

 //fin cierre load product
}

        //AGREGAR PROD. AL CARRITO
        
        let agregarAlCarrito = (prodId) => {
            
            const existe = carrito.some (prod => prod.id === prodId) 
            console.log("EXISTE", existe)
            
            const item = stockProductos.find((prod) => prod.id === prodId)
            
            //Selecciono la opcion que eligio el usuario
            let opcionSeleccionada = document.getElementById(`select${item.id}`).value 
            // console.log("VALUE del producto seleccionado ",opcionSeleccionada);
            
            // obtengo el precio de la opcion seleccionada haciendo un filter en el array opciones
            let precio = item.opciones.filter(obj => obj.tamaño == opcionSeleccionada)[0].precio
            // console.log("PRECIO ",precio)
            // console.log("log de agregar al carrito ",item)
            
    // creo la propiedad opcion seleccionada
    item.selectValue = opcionSeleccionada;
    // creo la propiedad precio seleccionado
    item.precioSeleccionado = precio
  
    if (existe){ 
        const prod = carrito.map (prod => { 
           
            console.log("VALUE PROD", prod.selectValue)

            if (prod.id === prodId){
                prod.stock++
                // sumo los precios correspondientes de los tamaños seleccionados
                item.sumaPrecioProductos = item.sumaPrecioProductos+item.precioSeleccionado
            }
        })
    }  
    else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        item.sumaPrecioProductos = precio
        carrito.push(item)
    }
   
    actualizarCarrito() 
}

//ELIMINAR OBJETOS DE CARRITO

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
   
    const indice = carrito.indexOf(item)
    
    carrito.splice(indice, 1)
    actualizarCarrito()
    console.log(carrito)
}

//FOREACH DEL CARRITO
 
let actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML ="" 


 
    
    carrito.forEach((prod) => {
       
            
     if (prod.producto) {

            const div = document.createElement('div')
            div.className = ('productoEnCarrito')
            div.innerHTML = `
            <img src=${prod.img} alt="">
            <p id="nombre-producto">${prod.nombre}</p>
            <p>Tamaño: ${prod.selectValue}</p>
            <p>Precio : $${prod.sumaPrecioProductos}</p>
            <p>stock: <span id="stock"> ${prod.stock}</span></p>
            <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            `
    
            contenedorCarrito.appendChild(div)
            console.log("ES PRODUCTO", prod.producto)
        }


        localStorage.setItem('carrito', JSON.stringify(carrito))
        
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.sumaPrecioProductos, 0)

    if(carrito == 0){
        localStorage.removeItem('carrito', JSON.stringify(carrito))
    }
    
};


//FINALIZAR COMPRA 

    //variables fuera de los eventos


let finalizarCompra = document.getElementById('finalizarcompra') 
 
let sectionEntrega = document.getElementById('entrega')


//CAMBIO DE PANTALLA CUANDO TOCO BOTON FINALIZAR COMPRA

finalizarCompra.addEventListener('click',(event) =>{
    
    contenedorProducto.innerHTML = ""


        carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoSeleccionado')
        div.innerHTML = `
            
        <img src=${prod.img} alt="">
        <h5 class="tituloProducto"> ${prod.nombre} </h5>
        <p class="descripcion">${prod.descr}</p>
        <p class="precioProducto">Precio: $${prod.sumaPrecioProductos}</p>

     `

    contenedorProducto.appendChild(div)


})


// DATOS DE ENTREGA     

const entrega = document.createElement('div')
document.getElementById('entrega').classList.add('entrega-active')
  sectionEntrega.innerHTML= `

  <h2>Datos de Entrega</h2>
      
  <form id="formulario-envio">

  <label for="nombreRecibe">First name:</label>
  <input type="text" id="nombreRecibe" name="nRecibe" placeholder="Nombre de quien recibe" >
  <br>

  <label for="apellidoRecibe">Last name:</label>
  <input type="text" id="apellidoRecibe" name="arecibe" placeholder="Apellido de quien recibe">
  <br>

  <label for="calleRecibe">Direccion entrega: </label>
  <input type="text" id="calleRecibe" name="crecibe" placeholder="Direccion de entrega">
    <br>

  <label for="telefonoRecibe">Telefono de quien RECIBE </label>
  <input type="text" id="telefonoRecibe" name="trecibe" placeholder="Telefono de quien recibe">
  <br>
  <br>

  <h3> Datos de Tarjeta de Credito</h3>

  <label for="nombreTarjeta">Nombre Titular de la Tarjeta </label>
  <input type="text" id="nombreTarjeta" name="nombreTarjeta" placeholder="Titular Tarjeta">
  <br>

  <label for="numeroTarjeta"> Numero Tarjeta </label>
  <input type="text" id="numeroTarjeta" name="numeroTarjeta" placeholder="Numero Tarjeta">
  <br>
  <br>

  <button id="botonEnviarDatos"> Enviar Datos </button>
  

  <br>
  
  </form>


  <h3 id="respuesta" > </h3>
`

//constante formulario datos de entrega
const formulario = document.querySelector('#formulario-envio')

//Evento formualrio

formulario.addEventListener('submit', validarFormulario)


//funciones

function validarFormulario(e){
    e.preventDefault();
    const nombreRecibe = document.getElementById ('nombreRecibe').value
    const apellidoRecibe = document.getElementById ('apellidoRecibe').value
    const calleRecibe = document.getElementById ('calleRecibe').value
    const telefonoRecibe = document.getElementById ('telefonoRecibe').value
    const nombreTarjeta = document.getElementById ('nombreTarjeta').value
    const numeroTarjeta = document.getElementById ('numeroTarjeta').value


    //pintar los datos obtenidos en la respuesta
    const respuesta = document.getElementById('respuesta');

    //condicional cuando no se escribio correctamente el formulario.

    let warning = ""
    let advertencia = true
    let datosValidos = true

    if(nombreRecibe.length <2){
        warning += `El nombre no es valido <br>`
        advertencia = true
        datosValidos = false
    }
    if(apellidoRecibe.length <2){
        warning += `El apellido no es valido <br>`
        advertencia = true
        datosValidos = false
    }    
    if(calleRecibe.length <2){
        warning += `La calle que ingresó no es valida <br>`
        advertencia = true
        datosValidos = false
    }    
    if(telefonoRecibe.length <2){
        warning += `El telefono no es valido <br>`
        advertencia = true
        datosValidos = false
    }    
    if(nombreTarjeta.length <2){
        warning += `El nombre del titular de la tarjeta no es valido <br>`
        advertencia = true
        datosValidos = false
    }    
    if(numeroTarjeta.length <2){
        warning += `El numero de la tarjeta no es valido <br>`
        advertencia = true
        datosValidos = false
    }

    if(advertencia){
        respuesta.innerHTML = warning
    } 
    
    if(datosValidos){  
    
    datosValidos = true

    respuesta.innerText = `¡¡Muchas gracias, los datos fueron enviados!!
    Los datos que ingresaste fueron:

    La persona que lo recibe es: ${nombreRecibe} ${apellidoRecibe}
    Lo enviamos a la calle: ${calleRecibe},
    Su telefono es: ${telefonoRecibe},
    
    Tu nombre y numero de tarjeta es: 
    Nombre: ${nombreTarjeta}
    N°: ${numeroTarjeta}

 
   `
}

}




// let enviarDatos = document.getElementById('botonEnviarDatos')

// enviarDatos.onclick = () => {
//   let nombreRecibe = document.getElementById('nombreRecibe').value;
//   let apellidoRecibe = document.getElementById('apellidoRecibe').value;
//   let calleRecibe = document.getElementById('calleRecibe').value;
//   let telefonoRecibe = document.getElementById('telefonoRecibe').value;
// }

sectionEntrega.appendChild(entrega)



})
//A partir de aca no hay mas nada




