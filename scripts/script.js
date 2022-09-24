let condicion = true;
let otraCondicion = false;
let edadObligatoria = 18;
let edadUser = parseInt(prompt('Ingresa tu edad'));
let edadOptativa = 16;
let edadMaxima= 69

// if(condicion){

//     console.log('la condicion es verdadera')

// }

// if (edad==37){
//     console.log('La edad es 37')
// }

// if (edad===string) {
//     console.log('Son iguales')
// }


if (edadUser>=edadObligatoria && edadUser<=edadMaxima){
    alert('Debes votar')
} else if (edadUser>=edadOptativa || edadUser>=edadMaxima) {
    alert('Puedes votar si quieres')
} else {
    alert('No debes votar')
}

