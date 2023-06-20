function probarCantidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes(30) === "La cantidad de integrantes no puede ser mayor a 25",
        "Validar Cantidad Integrantes no valido que la cantidad no sea mayor a 25"
    );

    console.assert(
        validarCantidadIntegrantes("") === "No ingreso ningun valor",
        "Validar Cantidad Integrantes no valido que no ingresen un valor"
    );

    console.assert(
        validarCantidadIntegrantes(1.2) === "La cantidad de integrantes no puede ser decimal",
        "Validar Cantidad Integrantes no valido que la cantidad no sea decimal"
    );

    console.assert(
        validarCantidadIntegrantes(5) === "",
        "Validar Cantidad Integrantes fallo con una cantidad valida"
    );

    console.assert(
        validarCantidadIntegrantes(1) === "La cantidad de integrantes no puede ser igual o menor a uno",
        "Validar Cantidad Integrantes no valido que cantidad no sea igual o menor a uno"
    );

    console.assert(
        validarCantidadIntegrantes('cinco') === "La cantidad de integrantes no pueden ser letras o caracteres",
        "Validar Cantidad Integrantes no valido que no sean letras o caracteres"
    );
}


function probarValidarEdad(){
    console.assert(
        validarEdad(151) === "La edad no puede ser mayor a 150 años",
        "Validar Edad no valido que la edad ingresada no sea mayor a 150"
    );        

    console.assert(
        validarEdad("") === "No ingreso ningun valor",
        "Validar Edad no valido que no ingresen un valor."
    );

    console.assert(
        validarEdad(17.5) === "La edad no puede ser decimal",
        "Validar Edad no valido que la edad no sea decimal"
    );

    console.assert(
        validarEdad(17) === "",
        "Validar Edad fallo con una edad valida"
    );

    console.assert(
        validarEdad(-1) === "La edad no puede ser menor o igual a 0",
        "Validar Edad no valido que la edad no sea menor o igual a 0"
    );

    console.assert(
        validarEdad('veinte') === "La edad no pueden ser letras o caracteres",
        "Validar Edad no valido que la edad no sean letras o caracteres"
    );
}


probarCantidadIntegrantes();
probarValidarEdad();
