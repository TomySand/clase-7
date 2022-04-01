function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'el campo nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el campo no este vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'el campo nombre debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarNombre('Fabricio') === '',
        'Validar nombre funcionó con un nombre valido',
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === 'el campo ciudad no puede estar vacio',
        'Validar ciudad no validó que el campo no este vacio',
    );
    console.assert(
        validarCiudad("Buenos Aires") === '',
        'Validar ciudad no funcionó con una ciudad valida',
    );

}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === 'el campo descripcion no puede estar vacio',
        'Validar descricpcion regalo no validó que el campo no este vacio',
    );
    console.assert(
        validarDescripcionRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === 'el campo descripcion no puede tener mas de 120 caracteres',
        'Validar descricpcion regalo no validó que la descripcion no sea demasiado larga',
    );

    console.assert(
        validarDescripcionRegalo("regalo") === '',
        'Validar descricpcion regalo no funcionó con una descrpicion valida',
    );
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo()