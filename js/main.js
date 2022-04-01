function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'el campo nombre debe tener al menos 1 caracter'
    } else if (nombre.length >= 50) {
        return 'el campo nombre debe tener menos de 50 caracteres'
    }
    return ""
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'el campo ciudad no puede estar vacio'
    }
    return ""
}

function validarDescripcionRegalo(descripcion) {
    if (descripcion.length === 0) {
        return 'el campo descripcion no puede estar vacio'
    } else if (descripcion.length >= 120) {
        return 'el campo descripcion no puede tener mas de 120 caracteres'
    }
    return ""
}

let nombre = document.formulario.nombre.value;
let ciudad = document.formulario.ciudad.value;
let descripcion = document.querySelector('[name=descripcion-regalo]').value;
validarNombre(nombre);
validarCiudad(ciudad);
validarDescripcionRegalo(descripcion);