function validarSalario(salario){
    if(!salario){
        return "Ingrese un valor";
    }else if(/[A-z]+/.test(salario)){
        return "El salario no pueden ser letras";
    }else if(!/^[0-9]+[,.]*[0-9]*$/.test(salario)){
        return "Ingrese solo numeros";
    }

    return "";
}