console.log("Holi")

const salad = [];
const salad2 = [1,2,3];
const salad3 = ["😝","😆","👻"];
const salad4 = ["tomato",1,false, [],{}, console.log("buenas")];
const sal = ["tomato",1,false, [],{}, console.log("buenas")];
alert(salad3[0]); // imprimir el valor del array segun la posicion 
//salad.length;

//alert(salad.length) // saber el tamaño del array
//alert(salad2.length)
//alert(salad3.length)
//alert(salad4.length)

//const dato = "11"
//alert(typeof dato);

//Reemplazar dato segun la posicion
alert(salad3[salad3.length -1])
salad3[1] = "🙍‍♂️";
console.log(salad3)


//Recorrer el Array

for( let i = 0 ; i <= salad.length; i++){
    alert(salad3);
}
// recorrer unaArray al revez
for(let i = salad3.length -1; i>= 0; i--){
    console.log(salad3[i])
    alert(salad3[i])
}

//metodo para añadir un elemento al final 
salad3.push("💟");
console.log(salad3)
alert(salad3)

// Elimina el ultimo elemento   
salad.pop();
console.log(salad3)

const eliminar = salad3.pop();
salad.pop();

//Añadir un elemento al inicio
salad3.