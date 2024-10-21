function validarRegistro(event) {  
    event.preventDefault(); 

    let nombreDeUsuario = document.getElementById("nombre").value.trim(); 
    console.log(nombreDeUsuario);

    let email = document.getElementById("email").value.trim(); 
    console.log(email);

    let telefono = document.getElementById("telefono").value.trim(); 
    console.log(telefono);

    let mensaje = document.getElementById("mensaje").value.trim(); 
    console.log(mensaje);

    if (!nombreDeUsuario || !email || !telefono || !mensaje) {
        alert("Por favor, completa todos los campos obligatorios.");
        return false; 
    }
    
    alert("Formulario enviado correctamente.");
    
    return true; 
}

// encabezados
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', validarRegistro);
});

document.addEventListener("DOMContentLoaded", function() {
    
    const navHTML = `
        <nav>
            <a href="Paginaprincipal.html#inicio">Inicio</a> |
            <a href="Paginaprincipal.html#recorridos">Recorridos</a> |
            <a href="Contacto.html" target="_blank" rel="noopener noreferrer">Contacto</a> |
            <a href="Paginaprincipal.html#faq">Preguntas Frecuentes</a>
        </nav>
    `;
    document.getElementById('nav-placeholder').innerHTML = navHTML;

    //formulario recorridos

    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value; 
        const mensaje = document.getElementById('mensaje').value;

        
        if (!nombre || !email || !telefono || !fecha) {
            alert("Por favor, completa todos los campos obligatorios.");
            return; 
        }

        if (confirm("¿Estás seguro de que deseas enviar el formulario?")) {
            alert("Formulario enviado correctamente.");
            formulario.submit(); 
        }
    });
});