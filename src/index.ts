let numeros : number = 0;
let cantPositivos : number = 0;
let porcPositivos : number = 0;
let num = Number(prompt("Ingrese un número"));
while ( num !== 0) {
if ( num > 0) {
cantPositivos++;
}
numeros++;
num = Number(prompt("Ingrese un número"));
}
if ( numeros > 0) {
porcPositivos=cantPositivos*100/numeros ;
console.log(cantPositivos, "positivos ", porcPositivos, " % del total.");
}