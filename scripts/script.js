


alert('A continuacion te solicitaremos los datos para que te registres');
let userReg = prompt('Crea el nombre de usuario que deseas utilizar');
let passReg = prompt('Crea la contraseña de ingreso');


function Login(){

    while (passReg.length<8) {
        alert('La contraseña debe contener al menos 8 caracteres')
        let newPassReg = prompt('ingresa nuevamente la contraseña')
            if (newPassReg.length>=8) {
                alert ('A continuacion te vamos a solicitar ingresar tus datos registrados, ten en cuenta que solo contaras con 3 intentos para ingresarlos correctamente')
                for(let i=2;i>=0;i--){
                    let userName = prompt('Ingresa tu nombre de usuario. tienes '+(i+1)+' intentos');
                    if (userName === userReg){
                        alert ('Nombre de usuario correcto, ahora ingresa tu contraseña');
                        let userPass = prompt('Ingresa tu contraseña. tienes '+(i+1)+' intentos');
                        if (userPass === newPassReg) {
                            alert ('Contraseña correcta, Bienvenid@ '+ userName +'');
                            login = true;
                            break;} 
                    } else if (userName != userReg || userPass != newPassReg) {
                        alert ('nombre de usuario o contraseña incorrecta, por favor ingresala nuevamente te quedan ' + i + ' intentos');}
                }
            }    
        }
    alert ('A continuacion te vamos a solicitar ingresar tus datos registrados, ten en cuenta que solo contaras con 3 intentos para ingresarlos correctamente')
    for(let i=2;i>=0;i--){
        let userName = prompt('Ingresa tu nombre de usuario. tienes '+(i+1)+' intentos');
        if (userName === userReg){
            alert ('Nombre de usuario correcto, ahora ingresa tu contraseña');
            let userPass = prompt('Ingresa tu contraseña. tienes '+(i+1)+' intentos');
            if (userPass === passReg) {
                alert ('Contraseña correcta, Bienvenid@ '+ userName +'');
                login = true;
                break;} 
        } else if (userName != userReg || userPass != passReg) {
            alert ('nombre de usuario o contraseña incorrecta, por favor ingresala nuevamente te quedan ' + i + ' intentos');}
    }

let login = false;
}

Login ()







// if(condicion){

//     console.log('la condicion es verdadera')

// }

// if (edad==37){
//     console.log('La edad es 37')
// }

// if (edad===string) {
//     console.log('Son iguales')
// }


// if (edadUser>=edadObligatoria && edadUser<=edadMaxima){
//     alert('Debes votar')
// } else if (edadUser>=edadOptativa || edadUser>=edadMaxima) {
//     alert('Puedes votar si quieres')
// } else {
//     alert('No debes votar')
// }

