/*function gehiketa (a, b){
    return a+b;
}
console.log(gehiketa(3,5));

function gehiketa (a,b){
    return a-b;
}
console.log(gehiketa2(3,5));

const gehiketa = function (a,b){
    return a+b;
}
console.log(gehiketa(5,5));*/

const gehiketa = (a, b) => a+b;
console.log(gehiketa(5, 5));

const BEZ = (a) => a *1.21;
console.log(BEZ(100));

const agurra = () => console.log("Kaixo mundua");
agurra();

// CLOSURES
const sortuKontadorea = () => {
    let kontador = 0;

    /*return () => {
        kontador++;
        return kontador;
    }*/
   return () => ++kontador;
}

const handitu = sortuKontadorea();
console.log(handitu());
console.log(handitu());
console.log(handitu());
console.log(handitu());

const sortuKontua = function (saldoInicial){
    let saldo = saldoInicial;
    return {
        sartuDirua(kantitatea){
            saldo += kantitatea;
            return "Dirua sartu da. Saldoa "+saldo;
        },
        ikusiSaldo(){
            return "Zure saldoa "+ saldo;
        }
    }
}
const ederrenKontua = sortuKontua(1000);
console.log(ederrenKontua.ikusiSaldo());
console.log(ederrenKontua.sartuDirua(1000));
console.log(ederrenKontua.ikusiSaldo());
console.log(saldo);

