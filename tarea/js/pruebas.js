function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre('31234113313') === 'Este campo debe tener solo letras',
    'Validar nombre no valido que el nombre tenga solo letras',
  );
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Tiene que seleccionar una opcion',
        'Validar ciudad no valido que el usuario no seleccione una opcion',
    );
}


function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 3 caracteres',
        'Validar descripcion regalo no valido que la descripcion del regalo tenga al menos 3 caracteres'
    );

    console.assert(
        validarDescripcionRegalo(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        ) === 'Este campo debe tener como maximo 250 caracteres',
        'Validar descripcion regalo no valido que la descripcion del regalo sea menor a 250 caracteres'
    );
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
