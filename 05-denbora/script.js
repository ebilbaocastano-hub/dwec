function agurtu(){
    alert("Kaixo");
}

let intervalo = setInterval(erlojua,1000);

function erlojua(){
    let gaur = new Date();
    document.getElementById("erlojua").innerHTML = `${gaur.getHours()}:${gaur.getMinutes()}:${gaur.getSeconds()}`
    
}