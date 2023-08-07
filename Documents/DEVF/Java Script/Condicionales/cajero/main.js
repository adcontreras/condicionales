function ingresar(event){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");
    
    var cuentas = [
        { nombre: "Mali",contraseña: "12Amo",saldo: 200 },
        { nombre: "Gera",contraseña:"Y90s",saldo: 290 },
        { nombre: "Maui",contraseña:"34Tu",saldo: 67 }
      ];
    
    let cuentaEncontrada = cuentas.find(cuenta => cuenta.nombre === username);

    if (cuentaEncontrada) {
        localStorage.setItem('nombreUsuarioSeleccionado', cuentaEncontrada.nombre);
        window.location.href = "inicio.html"; 
    // if(username.value === "Mali" && password === "12Amo" || username.value === "Gera" && password === "Y90s" ||  username.value === "Maui" && password === "34Tu" )
    // {
        window.location.href = "inicio.html";
        // Pendiente, inhabilitar boton de ingresar
    }else{
        mensaje.style.color = "red";
        mensaje.innerHTML = "Error al iniciar sesión, contraseña o usuario incorrecto. Intente de nuevo.";
    }
}