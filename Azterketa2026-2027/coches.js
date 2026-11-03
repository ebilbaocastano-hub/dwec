/* =========================================================
   EJERCICIO 1. ARRAYS – Concesionario Txurdi-Motor
   ========================================================= */

const coches = [
  { marca: "Seat",       modelo: "Ibiza",   anio: 2019, precio: 12500 },
  { marca: "Renault",    modelo: "Clio",    anio: 2021, precio: 15900 },
  { marca: "Toyota",     modelo: "Yaris",   anio: 2022, precio: 19800 },
  { marca: "Seat",       modelo: "León",    anio: 2017, precio: 9900  },
  { marca: "Volkswagen", modelo: "Golf",    anio: 2020, precio: 21500 },
  { marca: "Dacia",      modelo: "Sandero", anio: 2023, precio: 14200 },
  { marca: "Toyota",     modelo: "Corolla", anio: 2018, precio: 15000 },
  { marca: "Peugeot",    modelo: "208",     anio: 2016, precio: 8700  }
];


/* ---------------------------------------------------------
   a) cochesBaratos(precioMax)  (0,5 puntos)
   Devuelve un NUEVO array con los coches cuyo precio sea
   menor o igual que precioMax.
   --------------------------------------------------------- */
let cocheBarato = [];
let cochePorPrecio = [];
let cocheporMarca = [];

const cochesBaratos = (precioMAX) => {
    coches.forEach(coche => {
        if(coche.precio < precioMAX || coche.precio === precioMAX ){
            let cochePrecio = coche.precio;
            cocheBarato.push(cochePrecio);
        }
    });
    return cocheBarato;
};


/* ---------------------------------------------------------
   b) ordenarPorPrecio()  (0,6 puntos)
   Devuelve un NUEVO array con los coches ordenados de menor a
   mayor precio, SIN modificar el array original coches.
   --------------------------------------------------------- */
function ordenarPorPrecio() {
   
      return cochePorPrecio = coches.sort((a, b) => a.precio - b.precio);
};


/* ---------------------------------------------------------
   d) buscarMarca(marca)  (0,8 puntos)
   Debería devolver el primer coche de la marca indicada,
   pero siempre devuelve undefined.
   Corrige los DOS errores y explica en un comentario qué fallaba
   en cada caso.
   --------------------------------------------------------- */
/*function buscarMarca(marca) {
  coches.forEach(coche => {
    if (coche.marca.includes(marca)) {

      let cocheMarca = coche;
      cocheporMarca.push(cocheMarca);
    }
    
    return cocheporMarca;
  });
}*/
function buscarMarca(marca) { 
   let cocheMarca
   coches.forEach(coche => {
      cocheMarca = coches.find(coche.marca == marca)
   });
   return cocheporMarca.push(cocheMarca);
}



/* ---------------------------------------------------------
   Pruebas (puedes descomentarlas)
   --------------------------------------------------------- */
console.log(cochesBaratos(15000));   // 5 coches
console.log(ordenarPorPrecio());     // el primero es el Peugeot 208 (8700)

console.log(buscarMarca("Toyota"));  // { marca: "Toyota", modelo: "Yaris", ... }
// console.log(buscarMarca("Ford"));    // undefined
