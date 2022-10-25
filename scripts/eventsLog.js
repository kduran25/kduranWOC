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

userList = [];

function persona(nombre, apellido, nombreUsuario, contraseña) {
  (this.nombre = nombre),
    (this.apellido = apellido),
    (this.nombreUsuario = nombreUsuario),
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
    guardarDatos();
  }
};
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
  let data = (userList[0].nombreUsuario,userLogin.value,passLogin.value);
  if (!data) {
    alert("Usuario y/o contraseña erróneos");
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
  presentarInfo(toggles, 'd-none');
}

function validacion() {
  if (userLogin.value != userList[0].nombreUsuario || passLogin.value != userList[0].contraseña) {
    alert("Usuario y/o contraseña erróneos");
    return false;
  }  else{ if (recordar.checked) {
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
  array.forEach(element => {
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
  nombreUsuario.innerHTML = `Bienvenido/a, <span>${"usuario".nombre}</span>`;
}

function guardarDatos(usuario) {
  localStorage.setItem("usuario", JSON.stringify(userList));
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
