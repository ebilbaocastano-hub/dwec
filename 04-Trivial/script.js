let preguntas = [
  { categoria: "Geografía", enunciado: "¿Cuál es la capital de Francia?", respuesta: "1" },
  { categoria: "Historia", enunciado: "¿En qué año comenzó la Segunda Guerra Mundial?", respuesta: "2" },
  { categoria: "Arte", enunciado: "¿Quién pintó La noche estrellada?", respuesta: "3" },
  { categoria: "Ciencias", enunciado: "¿Cuál es el planeta más grande del sistema solar?", respuesta: "4" },
  { categoria: "Deportes", enunciado: "¿Cuántos jugadores hay en un equipo de fútbol?", respuesta: "5" },
  { categoria: "Espectáculos", enunciado: "¿Quién dirigió la película Titanic?", respuesta: "6" }
];

let ondo = 0;
let txarto =0;
let i =0;
do{
 if (prompt(preguntas[i].enunciado).toLowerCase() == preguntas[i].respuesta.toLowerCase()) {
   ondo++;
   if(ondo == 4) alert("Zorionak");
 }else{
 txarto++;
 if(txarto == 3) alert("Galdu duzu");
 }
 i++;
} while (txarto != 3 && ondo != 4);




do {
    for(let i=0; i<preguntas.length; i++){
        let respuesta = prompt(preguntas[i].enunciado);
        if (respuesta == preguntas[i].respuesta) {

        }
        
    }
    
} while (){

}