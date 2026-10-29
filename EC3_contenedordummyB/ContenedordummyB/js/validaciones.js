// Expresiones regulares solicitadas
var expreNomyApe = /^[a-zA-ZÁ-ý\s]{1,40}$/;
var expreDir = /^[a-zA-Z0-9Á-ý\s]{1,40}$/;
var expreTel = /^\d{7,14}$/;
var expreEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var expreComentarios = /^[\s\S]{20,128}$/;

// Función para mostrar u ocultar el textarea de comentarios
function toggleComentarios(mostrar) {
    const contenedor = document.getElementById("contenedorComentarios");
    if (mostrar) {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
        document.getElementById("comentarios").value = "";
        document.getElementById("nom8").style.display = "none";
        document.getElementById("comentarios").style.borderColor = "#ced4da";
    }
}

function validacion() {
    // Limpiar estados previos de errores visuales y alertas
    let campos = ["nombre", "apellido", "direccion", "telefono", "email", "comentarios"];
    campos.forEach(id => {
        let el = document.getElementById(id);
        if(el) el.style.borderColor = "#ced4da";
    });

    document.getElementById("nom").style.display = "none";
    document.getElementById("nom2").style.display = "none";
    document.getElementById("nom3").style.display = "none";
    document.getElementById("nom4").style.display = "none";
    document.getElementById("nom5").style.display = "none";
    document.getElementById("nom6").style.display = "none";
    let alertCom = document.getElementById("nom8");
    if(alertCom) alertCom.style.display = "none";

    // 1. Validar Nombre
    var valNombre = document.getElementById("nombre").value.trim();
    if (!expreNomyApe.test(valNombre)) {
        document.getElementById("nombre").focus();
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById("nom").style.display = "block";
        return false;
    }

    // 2. Validar Apellido
    var valApellido = document.getElementById("apellido").value.trim();
    if (!expreNomyApe.test(valApellido)) {
        document.getElementById("apellido").focus();
        document.getElementById("apellido").style.borderColor = "red";
        document.getElementById("nom2").style.display = "block";
        return false;
    }

    // 3. Validar Dirección
    var valDireccion = document.getElementById("direccion").value.trim();
    if (!expreDir.test(valDireccion)) {
        document.getElementById("direccion").focus();
        document.getElementById("direccion").style.borderColor = "red";
        document.getElementById("nom3").style.display = "block";
        return false;
    }

    // 4. Validar Teléfono
    var valTelefono = document.getElementById("telefono").value.trim();
    if (!expreTel.test(valTelefono)) {
        document.getElementById("telefono").focus();
        document.getElementById("telefono").style.borderColor = "red";
        document.getElementById("nom4").style.display = "block";
        return false;
    }

    // 5. Validar E-mail
    var valEmail = document.getElementById("email").value.trim();
    if (!expreEmail.test(valEmail)) {
        document.getElementById("email").focus();
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("nom5").style.display = "block";
        return false;
    }

    // 6. Validar Género (Radios)
    var generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    if (!generoSeleccionado) {
        document.getElementById("nom6").style.display = "block";
        return false;
    }

    // 7. Validar Comentarios dinámicos (si el radio "Sí" está seleccionado)
    var opSiChecked = document.getElementById("opSi").checked;
    var opNoChecked = document.getElementById("opNo").checked;

    if (opSiChecked) {
        var valComentarios = document.getElementById("comentarios").value.trim();
        if (!expreComentarios.test(valComentarios)) {
            document.getElementById("comentarios").focus();
            document.getElementById("comentarios").style.borderColor = "red";
            document.getElementById("nom8").style.display = "block";
            return false;
        }
    } else if (!opSiChecked && !opNoChecked) {
        // Opcional por si requiere que seleccione una opción de la pregunta de comentarios
        // (Dependiendo del criterio, se puede omitir si es opcional)
    }

    // Si todo es correcto, mostrar mensaje de éxito temporal
    let nom7 = document.getElementById("nom7");
    nom7.style.display = "block";
    setTimeout(function () {
        nom7.style.display = "none";
    }, 5000);

    return false; // Cambiar a true si deseas que mande los datos al archivo PHP de acción.
}