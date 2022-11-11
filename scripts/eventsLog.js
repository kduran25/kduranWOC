const regName = document.getElementById("validationCustom01"),
  regLastName = document.getElementById("validationCustom02"),
  regUserName = document.getElementById("validationCustomUsername"),
  regCity = document.getElementById("validationCustom03"),
  regPassword = document.getElementById("validationCustom05"),
  register = document.getElementById("register"),
  recordar = document.getElementById("recordarme"),
  userLogin = document.getElementById("userLogin"),
  passLogin = document.getElementById("passLogin"),
  form = document.querySelectorAll('input[type="text"]'),
  modalEl = document.getElementById("modalLogin"),
  modal = new bootstrap.Modal(modalEl),
  toggles = document.querySelectorAll(".toggles");
const doc = document;
const selectProv = document.getElementById("selectProvincias");
const selectMun = document.getElementById("selectMunicipios");
const selectLoca = document.getElementById("selectLocalidades");

userList = [];

function provincia() {
  fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let options = `<option value="Elige una provincia">Elige una provincia</option>`;

      json.provincias.forEach(
        (el) =>
          (options += `<option value="${el.nombre}">${el.nombre}</option>`)
      );

      selectProv.innerHTML = options;
    });
}

doc.addEventListener("DOMContentLoaded", provincia);

function municipio(provincia) {
  fetch(
    `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&max=5`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let options = `<option value="Elige un municipio">Elige un municipio</option>`;

      json.municipios.forEach(
        (el) => (options += `<option value="${el.id}">${el.nombre}</option>`)
      );

      selectMun.innerHTML = options;
    });
}

selectProv.addEventListener("change", (e) => {
  municipio(e.target.value);
  console.log(e.target.value);
});

function localidad(municipio) {
  fetch(
    `https://apis.datos.gob.ar/georef/api/localidades?municipio=${municipio}&max=5`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let options = `<option value="Elige una localidad">Elige una localidad</option>`;

      json.localidades.forEach(
        (el) => (options += `<option value="${el.id}">${el.nombre}</option>`)
      );

      selectLoca.innerHTML = options;
    });
}

selectMun.addEventListener("change", (e) => {
  localidad(e.target.value);
  console.log(e.target.value);
});

function persona(
  nombre,
  apellido,
  nombreUsuario,
  Provincia,
  Municipio,
  Localidad,
  contraseña
) {
  (this.nombre = nombre),
    (this.apellido = apellido),
    (this.nombreUsuario = nombreUsuario),
    (this.prov = Provincia),
    (this.mun = Municipio),
    (this.loca = Localidad),
    (this.contraseña = contraseña);
}

function usuario(username, password) {
  (this.username = username), (this.password = password);
}

const btnLog = document.getElementById("login");

let Capturar = function () {
  const persona1 = new persona(
    regName.value,
    regLastName.value,
    regUserName.value,
    selectProvincias.value,
    selectMunicipios.value,
    selectLocalidades.value,
    regPassword.value
  );

  if (persona1.contraseña.length < 8) {
    Swal.fire({
      title: "Error!",
      text: "La contraseña debe tener al menos 8 caracteres",
      icon: "error",
      confirmButtonText: "Ok",
    });
  } else if (!regName.value || !regUserName.value || !regPassword.value) {
    Swal.fire({
      title: "Error!",
      text: "no has completado al menos uno de los campos obligatorios",
      icon: "error",
      confirmButtonText: "Ok",
    });
  } else {
    userList.push(persona1);
    console.log(userList);
    Swal.fire({
      title: "Cool!",
      text: "Te registraste exitosamente! Ahora inicia sesion",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/05/39/86/88/1000_F_539868815_71P9i5WCzqZXK3COH9Dx4HM0CXzMGn16.webp",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
    });
  }
  }

register.addEventListener("click", (e) => {
  e.preventDefault();
  Capturar();
});

btnLog.onclick = (e) => {
  e.preventDefault();
  validacion();
  modal.hide();
};
const usuario1 = new usuario(userLogin.value, passLogin.value);

function beginLog() {
  getUser();
  let data = (userList[0].nombreUsuario, userLogin.value, passLogin.value);
  if (!data) {
    Swal.fire({
      title: "Error!",
      text: "nombre de usuario y/o contraseña incorrecta",
      icon: "error",
      confirmButtonText: "Ok",
    });
  } else {
    if (recordar.checked) {
      guardarDatos(userLogin.value, localStorage);
      saludar(getUser(localStorage));
    } else {
      guardarDatos(userLogin.value, sessionStorage);
      saludar(getUser(sessionStorage));
    }
  }
  modal.hide();
}

function validacion() {
  if (
    userLogin.value != userList[0].nombreUsuario ||
    passLogin.value != userList[0].contraseña
  ) {
    alert("Usuario y/o contraseña erróneos");
    return false;
  } else {
    if (recordar.checked) {
      guardarDatos(userLogin.value, localStorage);
      saludar(getUser(localStorage));
    } else {
      console.log("datos ingresados correctamente");
      guardarDatos(userLogin.value, sessionStorage);
      saludar(getUser(sessionStorage));
      userLogged();
      return true;
    }
  }
}
function presentarInfo(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

function userLogged(usuario) {
  if (usuario) {
    saludar();
    presentarInfo(toggles, "d-none");
  }
}

function saludar(usuario) {
  userName.innerHTML = `Bienvenid@, <span>${userList[0].nombre}</span>`;
  presentarInfo(toggles, "d-none");
}

function guardarDatos(usuario, storage) {
  storage.setItem("usuario", JSON.stringify(userList));
}
function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}
function getUser(usuario) {
  let usuarioReg = JSON.parse(localStorage.getItem("usuario"));
  if (usuario == null) {
    return false;
  } else {
    console.log(usuarioReg);
    return usuarioReg;
  }
}
function recuperarUsuario(localStorage) {
  let usuarioEnStorage = JSON.parse(localStorage.getItem("usuario"));
  return usuarioEnStorage;
}
btnLogout.addEventListener("click", () => {
  borrarDatos();
  presentarInfo(toggles, "d-none");
});
window.onload = () => userLogged(recuperarUsuario(localStorage));


