function validarRegistro() {
    let nombreDeUsuario = document.getElementById("nombre").value; 
    console.log(nombreDeUsuario);

    let email = document.getElementById("email").value; 
    console.log(email);

    let telefono = document.getElementById("telefono").value; 
    console.log(telefono);

    let mensaje = document.getElementById("mensaje").value; 
    console.log(mensaje);

    // Validación básica
    if (!nombreDeUsuario || !email || !telefono || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    
    alert("Formulario enviado correctamente.");
}