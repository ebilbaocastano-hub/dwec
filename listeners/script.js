const manejador = function (e) {
    if (e.type == "mouseover") {
        document.getElementById("eventos").style.color = "red";
    } else {
        document.getElementById("eventos").style.color = "blue";
    }

    /*if (e.target.id == "parrafo1") {
        alert("Has pasado el ratón por el parrafo 1");
    }
    if (e.target.id == "parrafo2") {
        alert("Has pasado el ratón por el parrafo 2");
    }*/
    
};

const manejador2 = function (e) {
        alert("Has hecho click en el parrafo " + e.target.innerHTML);
}


let arrayP = document.getElementsByTagName("p");
for (let i = 0; i < arrayP.length; i++) {
    arrayP[i].addEventListener("click", manejador2);
};



document.getElementById("eventos").addEventListener("mouseover", manejador);
document.getElementById("eventos").addEventListener("mouseout", manejador);
