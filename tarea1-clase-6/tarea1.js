/* 
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN). 
*/


function retornarMayorEdad(arrayEdades) {
    let mayorEdad = 0;
    arrayEdades.forEach(function(edad){
        if(mayorEdad < edad){
            mayorEdad = edad;
        }
    });
    return mayorEdad;
}

function retornarMenorEdad(arrayEdades) {
    let menorEdad = arrayEdades[0];
    arrayEdades.forEach(function(edad){
        if(menorEdad > edad){
            menorEdad = edad;
        }
    });
    return menorEdad;
}

function retornarPromedioEdad(arrayEdades) {
    let sumaEdades = 0;
    arrayEdades.forEach(function(edad){
        sumaEdades += edad;
    });
    return sumaEdades / arrayEdades.length;
}

function retornarArrayEdades(){
    let arrayEdades = [];
    document.querySelectorAll('.edad').forEach(function(edad){
        arrayEdades.push(Number(edad.value));
    });

    return arrayEdades;
}


//!  BOTON ENVIAR

function crearInputLabel(){
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;
    const $nodoInputsLabels = document.querySelector(".input-container");
    for(let i = 0; i < $cantidadIntegrantes; i++){
        const label = document.createElement("label");
        label.className = "titulo-label"; 
        label.textContent = `Edad del ${i + 1} integrante`;
        const input = document.createElement("input");
        input.type = 'number';
        input.className = 'edad';
        $nodoInputsLabels.appendChild(label);
        $nodoInputsLabels.appendChild(input);
    }

    imprimirBotonCalcular();
}

function imprimirBotonCalcular(){
    document.querySelector('#boton-calcular').style.display = 'block';
}



//! BOTON CALCULAR

function imprimirResultados(arrayEdades){
    document.querySelector("#mayor-edad").textContent = "Mayor edad: " + retornarMayorEdad(arrayEdades);
    document.querySelector("#menor-edad").textContent = "Menor edad: " + retornarMenorEdad(arrayEdades);
    document.querySelector("#promedio-edad").textContent = "Promedio edad: " + retornarPromedioEdad(arrayEdades);
}

function validarFormulario(){
    let cantidadErrores = 0;
    const edades = document.querySelectorAll('.input-container .edad');

    edades.forEach(function(edad){
        const error = validarEdad(Number(edad.value));

        if(error){
            cantidadErrores++;
            edad.classList.add('error');
            mostrarErrores(error);
        }else{
            edad.classList.remove('error');
        }
    });

    return cantidadErrores;
}

function mostrarErrores(error){
    eliminarInformacion();
    const errores = document.querySelector('#errores');
    const errorElemento = document.createElement('li');
    errorElemento.textContent = error;
    
    errores.appendChild(errorElemento);
}


//! BOTON RESETEAR

function reiniciar(){
    eliminarErrores();
    eliminarInputsLabels();
    eliminarInformacion();
    eliminarBotonCalcular()
}

function eliminarErrores(){
    const errores = document.querySelector('#errores');
    
    document.querySelectorAll('#errores li').forEach(function(elemento){
        errores.removeChild(elemento);
    });
}

function eliminarInputsLabels(){
    const $nodoInputsLabels = document.querySelector(".input-container");
    const $inputs = document.querySelectorAll(".edad");
    const $labels = document.querySelectorAll(".titulo-label");

    for(let i = 0; i < $inputs.length; i++){
        $nodoInputsLabels.removeChild($labels[i]);
        $nodoInputsLabels.removeChild($inputs[i]);
    }
}

function eliminarInformacion(){
    document.querySelectorAll('span').forEach(function(span){
        span.textContent = "";
    });
}

function eliminarBotonCalcular(){
    document.querySelector('#boton-calcular').style.display = 'none';
}



// BOTONES

document.querySelector("#boton-enviar").onclick = function(){
    reiniciar();

    const errorIntegrante = validarCantidadIntegrantes(document.querySelector("#cantidad-integrantes").value);
    
    if(!errorIntegrante){
        document.querySelector("#cantidad-integrantes").className = "";
        crearInputLabel();
    }else{
        mostrarErrores(errorIntegrante);
        document.querySelector("#cantidad-integrantes").className = "error";
    }
}

document.querySelector("#boton-calcular").onclick = function() {
    eliminarErrores();
    if(!validarFormulario()){
        imprimirResultados(retornarArrayEdades());
    }
}

document.querySelector("#boton-resetear").onclick = function() {
    reiniciar();
}