const categorias= ["AURICULARES","TECLADOS", "SILLAS", "MONITORES", "MOUSES"];

class Computacion {
    constructor (id , nombre , precio,categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria=categoria;
    }
}


const productosComputacion = [];
productosComputacion.push (new Computacion (1, "AURICULARES RAZER" , 6000,categorias[0]));
productosComputacion.push (new Computacion (2, "TECLADOS MARVO" ,3000,categorias[1]));
productosComputacion.push (new Computacion (3, "SILLAS MARVO" ,30000,categorias[2]));
productosComputacion.push (new Computacion (4, "MONITORES SENTEY" ,25000, categorias[3]));
productosComputacion.push (new Computacion (5, "TECLADOS LOGITECH" ,7000,categorias[1]));
productosComputacion.push (new Computacion (6, "MONITORES LG" ,20000, categorias[3]));
productosComputacion.push (new Computacion (7, "AURICULARES HYPER X" , 8000,categorias[0]));
productosComputacion.push (new Computacion (8, "AURICULARES LOGITECH" , 7000,categorias[0]));
productosComputacion.push (new Computacion (9, "MOUSE G305" , 4000,categorias[4]));
productosComputacion.push (new Computacion (10, "MOUSE G203" , 3000,categorias[4]));
console.log(productosComputacion);



let categoriaBuscada = prompt ("QUE PRODUCTOS BUSCA ? \n" + categorias)

let productosCategorias = categorias.includes(categoriaBuscada.toUpperCase());

if (productosCategorias) {
    let indexCategoria = categorias.indexOf(categoriaBuscada.toUpperCase());
    for (const objeto of productosComputacion) {
        if (objeto.categoria == categorias[indexCategoria]) {
            alert("ESTOS PRODUCTOS HAY EN STOCK: "+ objeto.nombre +" EL PRECIO ES "+ objeto.precio);
        }
        
        
    }
} else {
    alert("DEBE INGRESAR UNA CATEGORIA QUE EXISTA");
} 

let comprar = prompt ("DESEA COMPRAR ALGUN PRODUCTO ? \n RESPONDER SI PARA SEGUIR O NO PARA SALIR").toUpperCase();

if (comprar == "SI") {
    let productoSeleccionado = prompt ("QUE PRODUCTO DESEA COMPRAR ?").toUpperCase();
    alert("EL PRODUCTO "+productoSeleccionado+" FUE AGREGADO AL CARRITO");

} else {
    alert("GRACIAS POR SU ATENCION")

}









