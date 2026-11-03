/* =========================================================
   EJERCICIO 2. OBJETOS – Heladería Txurdi-Izozkiak
   =========================================================

   Crea la clase Helado con las propiedades:
     - sabor      (cadena)
     - bolas      (número)
     - precioBola (número)
     - cucurucho  (booleano: true = cucurucho, false = tarrina)

   a) Constructor que inicialice todas las propiedades.        (0,3 puntos)
   b) Método precioTotal(): bolas * precioBola
      (+0,50 € si es de cucurucho).                             (0,4 puntos)
   c) Método describir(), que devuelve, usando precioTotal():  (0,4 puntos)
        "Helado de pistacho, 2 bolas en cucurucho: 4.50 €"
        "Helado de fresa, 1 bolas en tarrina: 1.80 €"
   d) Método anadirBola(): añade una bola. Máximo 4 bolas:
      si ya tiene 4, no la añade y devuelve false;
      si la añade, devuelve true.                               (0,5 puntos)
   e) Crea dos helados, guárdalos en un array y recórrelo
      mostrando por consola el resultado de describir().        (0,3 puntos)
   ========================================================= */

class Helado {
   #sabor;
   #bolas;
   #precioBola;
   #cucurutxo;

    // Constructor con los atributos pedidos
    constructor(sabor, bolas, precioBola, cucurutxo) {
        this.sabor = sabor;
        this.bolas = bolas;
        this.precioBola = precioBola;
        this.cucurutxo = cucurutxo;
    }

    precioTotal(){
      let prezioTotala = `${Helado.bolas}`*`${Helado.precioBola}`;
      if(Helado.cucurutxo === true) {
         prezioTotala+0,50;
      }
      return prezioTotala;
    }

    describir (helado){
      let oharra;
      if (helado.cucurutxo === true) {
         oharra = "kukurutxoan";
      } else {
         oharra = "ontzitxoan";
      }
      return `${helado.sabor}, ${helado.bolas}bola ${oharra}: ${this.precioTotal()}`;
   }

   anadirBola(){
      if (bolas < 4){
         this.bolas++;
         return true;
      }else {
         return false;
      }
   }

   
}
const Helado1 = new Helado("Vainilla", 1, 3, true);
const Helado2 = new Helado("Sabor", 3, 3, false);

const helados = [matrix, inception];

helados.forEach(helado => {
    
    console.log(describir(helado));
});