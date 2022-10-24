const regName = document.getElementById("validationCustom01"),
  regLastName = document.getElementById("validationCustom02"),
  regUserName = document.getElementById("validationCustomUsername"),
  regCity = document.getElementById("validationCustom03"),
  regPassword = document.getElementById("validationCustom05"),
  register = document.getElementById("register"),
  recordar = document.getElementById("recordarme"),
  userLogin = document.getElementById('userLogin'),
  passLogin = document.getElementById('passLogin'),
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
  (this.username=username),
  (this.password=password);
}

const btnLog = document.getElementById("login");


btnLog.onclick = (e) => {
  e.preventDefault();
  beginLog();
  modal.hide();
};

function beginLog() {
  const usuario1 = new usuario(
    userLogin.value,
    passLogin.value,
  );
  if (usuario1.username==userList.persona1.nombreUsuario) {
    alert('tu nombre de usuario es correcto')
  }
}

function userLogged(userList) {
  if (userList) {
    saludar();
    presentarInfo(toggles, "d-none");
  }
}



function saludar(persona) {
  nombreUsuario.innerHTML = `Bienvenido/a, <span>${persona.nombre}</span>`;
}

function guardarDatos(persona) {
  localStorage.setItem("usuario", JSON.stringify(userList));
}
function getUser(user) {
  let usuarioReg = JSON.parse(localStorage.getItem('user'));
  if (user == null) {
    return false;
  } else {
    console.log(usuarioReg)
    return usuarioReg;
  }
}

register.addEventListener("click", (e) => {
  e.preventDefault();

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
  Capturar();

});
