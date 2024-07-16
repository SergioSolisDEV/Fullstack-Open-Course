// console.log("Hola mundo");
///////// Tipos de datos en JS /////////

// String: cadena de caracteres.  "a", "hola mundo"

// Boolean: true o false

// Null: valor nulo

// Number: 12312411, 1 

// Undefined

// Object: objeto

///////// VARIABLES /////////

// var
// let
// const

// var miPrimeraVariable = "lala" ----------- No usar

// let miPrimeraVariable = "Mi primera variable"
// console.log(miPrimeraVariable);

// // Mutabilidad
// miPrimeraVariable = "Esto ha cambiado"
// console.log(miPrimeraVariable);

// // Boolean
// let miBoolean = true
// let miOtroBool = false

// Números
// let miNumero = 0
// let miNumero2 = 12
// let miNumero3 = -258
// // console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);


// // Undefined
// let undef
// console.log(undef);

// // Null
// let nulo = null
// console.log("nulo", 12, nulo);

// // Objects
// // Objeto vacío
// const miPrimerObjeto = {}

// // Objeto
// const miObjeto = {
//      unNumero: 12,
//      unString: "Esta cadena de caracteres",
//      unaCondicion: true,
// }

// console.log(miObjeto.unString);

// Arrays
// const arrVacio = []
// const arr = [1, 2, "Hola", "Mundo", miObjeto]
// // console.log(arrVacio, arr);

// arrVacio.push(5)
// arrVacio.push(3)
// arrVacio.push(1)
// arrVacio.push("Hola")
// console.log(arrVacio);


///////// OPERADORES MATEMÁTICOS /////////

// const suma = 1 + 2

// const resta = 2 - 1

// const multiplicar = 1 * 2

// const dividir = 9 / 3

// const modulo = 10 % 3

// let num = 5
// num++

// console.log(suma, resta, multiplicar, dividir, modulo, num);

///////// OPERADORES DE COMPARACIÓN /////////

// Igualdad estricta
// const resultado1 = 5 === "5"
// // Igualdad no estricta
// const resultado2 = 5 == "5"

// console.log(resultado1, resultado2);

// const resultado3 = 5 < 6
// const resultado4 = 5 > 6
// const resultado5 = 5 > 6
// const resultado6 = 5 > 4

// console.log(resultado5, resultado6)

///////// OPERADORES LÓGICOS /////////
// or ||, and &&, not !

// const resultadoOr = false || true
// console.log(resultadoOr);

// const resultadoOr2 = false || false
// console.log(resultadoOr2);

// const resultadoAnd = true && true
// console.log(resultadoAnd);

// const resultadoAnd2 = true && false
// console.log(resultadoAnd2);

// const resultadoAnd3 = true && true && true && true && false
// console.log(resultadoAnd3);

// const resultadoNot = true
// console.log(!resultadoNot)

// const resultadoNot2 = false
// console.log(!resultadoNot2)



///////// CONTROL DE FLUJO /////////

// IF

// const edad = 10
// if (edad > 5 && edad < 18) {
//     console.log("El niño puede jugar")
// } else {
//     console.log("El niño no puede jugar")
// }

// WHILE

// let miNumero = 1
// while (miNumero <= 100) {
//     console.log(miNumero)
//     miNumero++
// }

// SWITCH

// let x = 3

// switch (x) {
//     case 1: {
//         console.log("Yo soy el caso 1");
//         break;
//     }
//     case 2: {
//         console.log("Yo soy el caso 2");
//         break;
//     }
//     case 3:{
//         console.log("Yo soy el caso 3");
//         break;
//     }
//     default: {
//         console.log("Yo soy el caso por defecto");
//         break;
//     }
// }

// FOR LOOP

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// ACCEDER A ARRAYS
// const numeros = [1, 2, 3, 4, 5]
// // console.log(numeros[0])

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }


///////// FUNCIONES /////////

// function iterar(arg1) {
//     for (let i = 0; i < arg1.length; i++) {
//         console.log(arg1[i])
//     }
// }

// const numeros = [1, 2, 3, 4, 5]
// const nombre = ["Pedro", "Juan", "Felipe", "Chanchito Feliz", "Chanchito triste"]
// iterar(numeros)
// iterar(nombre)

// function suma(num1, num2) {
//     return num1 + num2
// }

// const resultadoSuma = suma(1, 2)
// const resultadoSuma2 = suma(5, 6)
// const resultadoSuma3 = suma(resultadoSuma, resultadoSuma2)
// console.log(resultadoSuma3)

// function sumar(a, b, cb) {
//     const r = a + b
//     cb(r)
// }

// function callback(result) {
//     console.log("resultado", result)
// }
// // callback(6)
// sumar(2, 3, callback)

// // FAT ARROW FUNCTIONS
// const miFatArrowFunction = (a, b) => a + b
// const otraFAF = (a, b) => {
//     return a + b
// }
// const r = otraFAF(1, 2)
// // console.log(r)