// var cuentas = [
//     { nombre: "Mali",contraseña: "12Amo",saldo: 200 },
//     { nombre: "Gera",contraseña:"Y90s",saldo: 290 },
//     { nombre: "Maui",contraseña:"34Tu",saldo: 67 }
//   ];

// let mensajeBienvenida = document.getElementById('mensajeBienvenida');
// mensajeBienvenida.textContent = `Bienvenido, ${cuentas}!`;

let nombreUsuarioSeleccionado = localStorage.getItem('nombreUsuarioSeleccionado');

let mensajeBienvenida = document.getElementById('mensajeBienvenida');
mensajeBienvenida.textContent = `Bienvenido/a, ${nombreUsuarioSeleccionado}!`;