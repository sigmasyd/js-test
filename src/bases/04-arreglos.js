//const arreglo = new Array(10); asi deberia de instanciarse, pero no es aconsejable
//const arreglo = [];
/*arreglo.push(1);  // no debe usarse porque push modifica el objeto principal
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);*/
const arreglo = [1, 2, 3, 4]; //esta forma es mejor
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function (item) {
  return item * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
