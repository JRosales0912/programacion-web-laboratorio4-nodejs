var readlineSync = require('readline-sync');
var chalk = require('chalk');
 
// Wait for user's response.
var texto = readlineSync.question('Por favor ingrese una caden con parentesis, llaves o corches no anidados debidamente utilizados \n');

console.log(chalk.blue("\n Análisis"));

const regLlaves = /{([^}]*)}/g;
const regCorchetes = /\[([^\]]*)]/g;
const regParentesis = /\(([^\)]*)\)/g;

const nparentesisA = texto.replace(/[^\)]/g, "").length; 
const nparentesisB = texto.replace(/[^\(]/g, "").length; 
const ncorchetesA = texto.replace(/[^\]]/g, "").length;
const ncorchetesB = texto.replace(/[^\[]/g, "").length;
const nllavesA = texto.replace(/[^\}]/g, "").length;
const nllavesB = texto.replace(/[^\{]/g, "").length; 

var llavesA = texto.match(regLlaves); 
console.log("Conjuto de llaves " + llavesA);
var parentesisA = texto.match(regParentesis);
console.log("Conjuto de parentesis " + parentesisA);
var corchetesA = texto.match(regCorchetes); 
console.log("Conjuto de corchetes " + corchetesA);

console.log(chalk.blue("\n Resultado "));

if(!((nllavesA==nllavesB)&&(ncorchetesA==ncorchetesB)&&(nparentesisA==nparentesisB)))
{
    console.log(chalk.red("Cadena invalida"));
}

if(!((nllavesA==llavesA.length)&&(ncorchetesA==corchetesA.length)&&(nparentesisA==parentesisA.length)))
{
    console.log(chalk.red("Cadena invalida"));
}
else
{
    console.log(chalk.green("¡Cadena valida!"));
}
