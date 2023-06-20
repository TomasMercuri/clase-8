function validarCantidadIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes == ""){
        return "No ingreso ningun valor";
    }else if(cantidadIntegrantes > 25){
        return "La cantidad de integrantes no puede ser mayor a 25";
    }else if(cantidadIntegrantes <= 1){
        return "La cantidad de integrantes no puede ser igual o menor a uno";
    }else if(/^[0-9]+.[0-9]+$/.test(cantidadIntegrantes)){
        return "La cantidad de integrantes no puede ser decimal";
    }else if(!/^[0-9]+$/.test(cantidadIntegrantes)){
        return "La cantidad de integrantes no pueden ser letras o caracteres"
    }

    return "";
}

function validarEdad(edad){
    if(edad == ""){
        return "No ingreso ningun valor";
    }else if(edad > 150){
        return "La edad no puede ser mayor a 150 años";
    }else if(edad <= 0){
        return "La edad no puede ser menor o igual a 0";
    }else if(/^[0-9]+[,.][0-9]+$/.test(edad)){
        return "La edad no puede ser decimal";
    }else if(!/^[0-9]+$/.test(edad)){
        return "La edad no pueden ser letras o caracteres";
    }

    return "";
}
