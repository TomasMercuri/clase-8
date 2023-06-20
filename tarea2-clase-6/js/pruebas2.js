function probarValidarSalario(){
    console.assert(
        validarSalario("") === "Ingrese un valor",
        "Validar Salario no valido que no ingresen un valor"
    );

    console.assert(
        validarSalario("cien") === "El salario no pueden ser letras",
        "Validar Salario no valido que el salario no sean letras"
    );

    console.assert(
        validarSalario(12000) === "",
        "Validar Salario fallo con una respuesta valida"
    );
}

probarValidarSalario();