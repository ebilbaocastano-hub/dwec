window.addEventListener("load", inicio, true);

function inicio() {
  document.getElementById("calcular").addEventListener("click", calcularFechas);
}

function calcularFechas() {
  //CODIGO AQUI
  const meses = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  let input_mespres = document.getElementById("presenteMes").value;
  let num_mespres = meses.indexOf(input_mespres);
  let input_diapres = document.getElementById("presenteDia").value;
  let input_anopres = document.getElementById("presenteAno").value;
  let input_horpres = document.getElementById("presenteHora").value;
  let input_minpres = document.getElementById("presenteMinuto").value;

  let input_mesdes = document.getElementById("destinoMes").value;
  let num_mesdes = meses.indexOf(input_mesdes);
  let input_diades = document.getElementById("destinoDia").value;
  let input_anodes = document.getElementById("destinoAno").value;
  let input_hordes = document.getElementById("destinoHora").value;
  let input_mindes = document.getElementById("destinoMinuto").value;

  let fechaPresente = new Date(
    input_anopres,
    num_mespres,
    input_diapres,
    input_horpres,
    input_minpres,
  );
  let fechaDestino = new Date(
    input_anodes,
    num_mesdes,
    input_diades,
    input_hordes,
    input_mindes,
  );

  let esPasado = fechaDestino < fechaPresente;

  // 1. Convertimos la diferencia en un número positivo siempre
  let diferencia = Math.abs(fechaDestino - fechaPresente);

  // 2. Aplicamos el resto (%) de la unidad anterior en tus fórmulas
  let ano = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
  let dia = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24),
  );
  let hora = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  let minuto = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

  let mensajeFinal = `La diferencia es de ${ano} años, ${dia} días, ${hora} horas y ${minuto} minutos.`;

  if (esPasado) {
    document.getElementById("mensaje").innerHTML = "Viajarás al pasado " + mensajeFinal;
  }else {
    document.getElementById("mensaje").innerHTML = "Viajarás al futuro " + mensajeFinal;
  }
}
