


alert('A continuacion te solicitaremos los datos para que te registres');
let userReg = prompt('Crea el nombre de usuario que deseas utilizar');
let passReg = prompt('Crea la contraseña de ingreso');


function Login(){
    let login = false
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


}

Login ()

function comic(Coname, ID, year, dateAgg, editorial) {
    this.name = Coname;
    this.year = year;
    this.ID = ID;
    this.date = dateAgg;
    this.editorial = editorial;
}

const Comic1 = {
    Coname : 'THE AMAZING SPIDERMAN FULL CIRCLE',
    year : 2000,
    ID: 10,
    dateAgg: new Date("November 28, 2021 10:00:00"),
    editorial: 'MARVEL COMICS',
}
const Comic2 = new comic('THE BOYS VOL. 1', 2002, 7, new Date("December 25, 2021 13:30:00"), 'UTOPIA EDITORIAL')
const Comic3 = new comic('NIGHTWING REBIRTH', 2010, 15, new Date("March 10, 2022 15:40:00"), 'DC COMICS')
const Comic4 = new comic('LIFE IS STRANGE', 2015, 21, new Date("March 10, 2022 16:10:00"), 'HEROES DE PAPEL')

const comicList = []
comicList.push(Comic1,Comic2,Comic3,Comic4)
console.log (comicList)