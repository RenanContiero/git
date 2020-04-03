const rls  = require('ml-regression-multivariate-linear');

const km = [[5],[8],[12],[25],[31]];
const mil = [[3.10],[4.97],[7.46],[15.54],[19.27]]

const dia = [[1],[2],[3],[4]] // começa no dia 28/03/2020
const mortos = [[114],[136],[165],[244]]


// const regression = new rls (km,mil);
// console.log(regression.predict([6]));

const regression = new rls (dia,mortos);
console.log(regression.predict([30]));

var p = document.getElementById("text");
p.innerHTML = `Motes estimada em 30 dias: ${regression.predict([30])}`