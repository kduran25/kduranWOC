
function persona (nombre, contraseña) {
    this.nombre =  nombre,
    this.contraseña = contraseña;
}

const userList = [] 

console.log(userList)

const btnLog = document.getElementById('login');

btnLog.onclick = () => {
    beginLog()
}

function beginLog() {
    alert('A continuacion te solicitaremos los datos para que te registres');
    loginBtn()
}
    function loginBtn() {
        const persona1 = {
            nombre: prompt('Crea el nombre de usuario que deseas utilizar'),
            contraseña: prompt('Crea la contraseña de ingreso'),
        }
        userList.push(persona1);
        let login = false;
        while (persona1.contraseña.length<8) {
        alert('La contraseña debe contener al menos 8 caracteres')
        let newPassReg = prompt('ingresa nuevamente la contraseña')
            if (newPassReg.length>=8) {
                alert ('A continuacion te vamos a solicitar ingresar tus datos registrados, ten en cuenta que solo contaras con 3 intentos para ingresarlos correctamente')
                for(let i=2;i>=0;i--){
                    let userName = prompt('Ingresa tu nombre de usuario. tienes '+(i+1)+' intentos');
                    if (userName === persona1.nombre){
                        alert ('Nombre de usuario correcto, ahora ingresa tu contraseña');
                        let contraseña = prompt('Ingresa tu contraseña. tienes '+(i+1)+' intentos');
                        if (contraseña === newPassReg) {
                            alert ('Contraseña correcta, Bienvenid@ '+ userName +'');
                            login = true;
                            break;} else if (userName != persona1.nombre || contraseña != newPassReg) {
                        alert ('nombre de usuario o contraseña incorrecta, por favor ingresala nuevamente te quedan ' + i + ' intentos');} 
                    }
                }
            }    
        }

    for(let i=2;i>=0;i--){
        let userName = prompt('Ingresa tu nombre de usuario. tienes '+(i+1)+' intentos');
        if (userName === persona1.nombre){
            alert ('Nombre de usuario correcto, ahora ingresa tu contraseña');
            let userPass = prompt('Ingresa tu contraseña. tienes '+(i+1)+' intentos');
            if (userPass === persona1.contraseña) {
                alert ('Contraseña correcta, Bienvenid@ '+ userName +'');
                login = true;
                break;} 
        } else if (userName != persona1.nombre || userPass != persona1.contraseña) {
            alert ('nombre de usuario o contraseña incorrecta, por favor ingresala nuevamente te quedan ' + i + ' intentos');}
    }
    userList.slice (0,3)
    console.log(userList)
    userList.forEach(user => {
        console.log('El nuevo usuario resgitrado es el numero ' + (userList.indexOf(persona1) + 1))
    });
        const aCadena = userList.toString();
        console.log('Tambien te mostramos sus datos de registro que son: nombre de usuario ' + persona1.nombre + ' y su contraseña es ' + persona1.contraseña);
    }




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
console.log('El index del comic es ' + comicList.indexOf (Comic4));
comicList.slice (0,3)
console.log (comicList)
comicList.reverse()
console.log (comicList)
console.log('El index del comic es ' + comicList.indexOf (Comic4));

