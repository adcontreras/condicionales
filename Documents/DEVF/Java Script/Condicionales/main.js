// Deberas realizar los ejercicios anexados abajo:
// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

// let pregunta = prompt('¿Eres bellisimo/a?');

// if(pregunta.toLowerCase() === 'si'){
//     console.log('Ciertamente');
// }else{
//     console.log('No te creo');
// }

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

// let num = parseInt(prompt('Ingresa un número'));

// if(num % 2 === 0){
//     console.log(num + ' es divisible entre 2');
// }else{
//     console.log(num + ' no es divisible entre 2');
// }

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

// let num = parseInt(prompt('Ingresa un número'));

// if(num % 2 === 0){
//     console.log(`${num} es número par`);
//     alert(`${num} es número par`);
// }else{
//     console.log(`${num} no es número par`);
//     alert(`${num} no es número par`);
// }


// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste u prnemio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.


// let num = parseInt(prompt('Ingresa un número de cliente'));

// if(num === 1000){
//     console.log('Felicidades ganaste un premio');
// }else{
//     console.log(`${num} Lo sentimos, sigue participando`);
// }


// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.


// let num1 = parseInt(prompt('Ingresa un número'));
// let num2 = parseInt(prompt('Ingresa un número'));

// if(num1 >= num2){
//     console.log(`${num2} es el número menor`);
// }else{
//     console.log(`${num1} es el número menor`);
// }


// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

// let num1 = parseInt(prompt('Ingresa un número'));
// let num2 = parseInt(prompt('Ingresa un número'));
// let num3 = parseInt(prompt('Ingresa un 9número'));

// if(num1 >= num2 && num1 >= num3){
//     console.log(`${num1} es el número mayor`);
// }else if (num2 >= num1 && num2 >= num3){
//     console.log(`${num2} es el número mayor`);
// }else{
//     console.log(`${num3} es el número mayor`);
// }

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

// let diaSemana = prompt('Ingresa un día de la semana');

// if(diaSemana.toLocaleLowerCase() === 'lunes'){
//     console.log(`Ánimo, excelente inicio de semana`);
// }else if(diaSemana.toLocaleLowerCase() === 'viernes'){
//     console.log(`Yei, por fin es viernes`);
// }else if (diaSemana.toLocaleLowerCase() === 'sabado' || diaSemana.toLocaleLowerCase() === 'domingo'){
//     console.log(`Sigue disfrutando el fin de semana`);
// }else{
//     console.log('Que tengas un maravilloso día');
// }

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

// let calif = parseInt(prompt('Ingresa la calificación'));

// if(calif <= 10 && calif >= 1){
//     if(calif >= 1 && calif <= 5){
//         console.log('Reprobado');
//     }else if(calif >=6 && calif <=8 ){
//         console.log('Regular');
//     }else if(calif === 9){
//         console.log('Bien');
//     }else if(calif === 10){
//         console.log('Excelente');
//     }
// }else{
//     console.log('Error, el número ingresado no aplica');
// }


// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

// let compra = prompt('Ingresa el topping deseado');
// let helado = 50
// let oreo = 10
// let KitKat = 15 
// let brownie = 20 
// let totalApagar;


// if(compra.toLowerCase() === 'oreo'){
//     totalApagar = helado + oreo
//     console.log(`El total a pagar es de ${totalApagar}`);
// }else if(compra.toLowerCase() === 'kitkat'){
//     totalApagar = helado + KitKat
//     console.log(`El total a pagar es de ${totalApagar}`);
// }else if(compra.toLowerCase() === 'brownie'){
//     totalApagar = brownie + helado
//     console.log(`El total a pagar es de ${totalApagar}`);
// }else{
//     console.log(`Lo sentimos ese topping no lo tenemos disponible, el precio total a pagar es de ${helado}`);
// }


// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses

// let curso = prompt('Ingresa el curso a elegir, Course, Carrera, Master')
// let beca = prompt('Ingresa tu beca, Facebook, Google, Jesua, Ninguna')

// let costoCourse = 4999
// let costoCarrera = 3999
// let costoMaster = 2999

// let facebook = .2
// let google = .15
// let jesua = .5

// let duracionCourse = 2
// let duracionCarrera = 6 
// let duracionMaster = 12

// let total;
// let totalMensual;
// let totalDescuento = 0;

// if(curso.toLowerCase() === 'course'){
//     totalMensual = costoCourse
//     total = costoCourse * duracionCourse 
//     console.log(`el total a pagar por mes es de ${totalMensual}`);
//     console.log(`el total por el curso completo es de ${total}`);
// }else if(carrera.toLowerCase() === 'carrera'){
//     totalMensual = costoCarreraCarrera
//     total = costoCarrera * duracionCarrera
//     console.log(`el total a pagar por mes es de ${totalMensual}`);
//     console.log(`el total por el curso completo es de ${total}`);
// }else if (master.toLowerCase() === 'master'){
//     totalMensual = costoMaster
//     total = costoMaster * duracionMaster
//     console.log(`el total a pagar por mes es de ${totalMensual}`);
//     console.log(`el total por el curso completo es de ${total}`);
// }else{
//     console.log('La opcion ingresada no es válida');
// }

// if (beca.toLowerCase() === 'facebook') {
//     totalDescuento = total * facebook; 
//     console.log(`el total a pagar con descuento es de ${total - totalDescuento}`);
//   } else if (beca.toLowerCase() === 'google') {
//     totalDescuento = total * google; 
//     console.log(`el total a pagar con descuento es de ${total - totalDescuento}`);
//   } else if (beca.toLowerCase() === 'jesua') {
//     totalDescuento = total * jesua; 
//     console.log(`el total a pagar con descuento es de ${total - totalDescuento}`);
//   } else {
//     console.log(`el total a pagar con descuento es de ${total}`);
//   }


// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

// let vehiculo = prompt('¿En que vehículo viajaste? Coche, Moto, Autobus');
// let kmRecorridos = prompt('¿cuantos km recorrío');


// let precioKm;
// let litrosConsumidos;
// let totalApagar;

// if(vehiculo.toLowerCase() === 'coche'){
//     litrosConsumidos =  

// }