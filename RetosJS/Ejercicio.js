//Retos 1, Declarar un array
const arrayDays = ["Lunes", "martes", "miercoles" , "jueves", "viernes", "Sabado", "Domingo"]

//Reto 2 
const impar = [];
const par = [];
for (let i = 0 ; i < arrayDays.length){
    if( i % 2 !== 0 ){
        impar.push(arrayDays[i]);
    }else{
        par.push(arrayDays[i]);
    }
}
console.log ("odd arry" , impar);
console.log ("odd arry" , par);