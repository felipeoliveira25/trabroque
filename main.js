const nomes = [];
nomes[0] = "Pedro" ;
nomes[1] = "Jubileu" ;
nomes[2] = "Ana" ;
nomes[3] = "Rebeca" ;
nomes[4] = "Maria" ;
nomes[10] = "Mariazinha" ;

console.table(nomes);

const numeros = [1,2,3,4,5,6];
for(let i= 0; i < numeros.length; i+=2){
    console.log(i, numeros[i]);

}

const notas = [7,8,3,5,10,9,8,8];
let valores = '';

for(let nota of notas){
    valores += notas + ' ';
}

console.table(`Valores dos indices do array => ${valores}`)
let indices = '';

for(let indices in notas){
    valores += indices + ' ';
}

console.table(`Valores dos indices do array => ${indices}`);

const numeross= [1,2,3,4,5];
numeros.splice(1,2);

console.log(numeros);

console.log(numeros.pop());
console.log(numeros.pop());
console.log(numeros);