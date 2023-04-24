const userName = window.prompt("Cual es tu nombre?")

console.log(userName)

if(!userName)
{
    console.log("Cancelado")
}else if (userName !== "Admin"){
    console.log("No te conozco");
}else{    
    const userPassword = window.prompt("What is you password");
    
    if(!userPassword){
        console.log("Cancelado");
    }
    else if(userPassword === "TheMaster"){
        console.log("Contraseña incorrecta");
    }else{
        console.log("Bienvenido");
    }
}
/*Ternario*/

let myNumber = 15;

let result = myNumber < 10 ? myNumber + 'Menor de 10' : myNumber + 'Mayor a 10';

//Ciclos For 
for (let i = 0 ; i<= 10 ; i++){
    alert(i);
}
 //ciclos while 
 let muVariable = 100;

 while (muVariable > 0){
    console.log(muVariable);
    muVariable -= 10;
    muVariable = muVariable -20;
 }