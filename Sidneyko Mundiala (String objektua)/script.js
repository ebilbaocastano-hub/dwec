let esaldia = "La selección femenina de España se ha proclamado campeona del Mundial después de derrotar a Inglaterra en la gran final de Sidney";

// Esaldiaren luzeera kalkulatu eta kontsolan erakutsi
let luzera = esaldia.length;
console.log(luzera);

// Esaldiaren 25. karakterea kalkulatu eta kontsolan erakutsi
let karaktere = esaldia.charAt(25);
console.log(karaktere);

// Esaldian lehen "d" karakterearen posizioa kalkulatu eta kontsolan erakutsi
let dlehena = esaldia.indexOf("d");
console.log(dlehena);

// Esaldian azken "d" karakterearen posizioa kalkulatu eta kontsolan erakutsi
let dazkena = esaldia.lastIndexOf("d");
console.log(dazkena);

// Esaldian bigarren "d" karakterearen posizioa kalkulatu eta kontsolan erakutsi
let dbigarren = esaldia.indexOf("d", dlehena + 1);
console.log(dbigarren);

// Esaldian "Mundial" hitzaren posizioa kalkulatu eta kontsolan erakutsi
let pMundial = esaldia.indexOf("Mundial");
console.log(pMundial);

// Esaldian "Portugal" hitza dagoen ala ez kalkulatu eta kontsolan erakutsi
let portugal = esaldia.includes("Portugal");
console.log(portugal);

// Esaldian "Sidney" hitza hasieran dagoen ala ez kalkulatu eta kontsolan erakutsi
let eSydney = esaldia.startsWith("Sidney");
console.log(eSydney);

// Esaldian "Sidney" hitza amaieran dagoen ala ez kalkulatu eta kontsolan erakutsi
let aSydney = esaldia.endsWith("Sidney");
console.log(aSydney);

// Esaldia " 2023ko abustuaren 20an" testuarekin batu eta kontsolan erakutsi
let gehituEsaldia = esaldia.concat(" 2023ko abustuaren 20an");
console.log(gehituEsaldia);

// Esaldiaren 26. eta 36. karaktereen artean dauden karaktereak kalkulatu eta kontsolan erakutsi
let karaktere2635 = gehituEsaldia.substring(26, 36);
console.log(karaktere2635);

// Esaldiaren 40. karakteretik aurrerako karaktere guztiak kalkulatu eta kontsolan erakutsi
let karak40 = esaldia.substring(40);
console.log(karak40);

// Esaldi berri bat sortu, hasierako eta amaierako hutsuneak kendu eta kontsolan erakutsi
let esaldiBerria = "     lorem ipsum dolor sit amet, consectetur adipiscing elit.          ";
let trimEsaldia = esaldiBerria.trim();
console.log(trimEsaldia);

// Esaldi originala letra xehe bihurtu eta kontsolan erakutsi
let letraXehe = esaldia.toLowerCase();
console.log(letraXehe);

// Esaldi originala letra larria bihurtu eta kontsolan erakutsi
let letraLarria = esaldia.toUpperCase();
console.log(letraLarria);

// Esaldi originala hitzetan banatu eta kontsolan erakutsi
let esaldiaToArray = esaldia.split(" ");
console.log(esaldiaToArray);


