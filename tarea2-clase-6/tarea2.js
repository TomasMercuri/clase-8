/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

//! ERRORES
function mostrarErrores(error){
    const errores = document.querySelector('#errores');
    const errorElemento = document.createElement('li');
    errorElemento.textContent = error;

    errores.appendChild(errorElemento);
}

function eliminarErrores(){
    document.querySelectorAll('#errores li').forEach(function(errorElemento){
        errorElemento.remove();
    });
}


function validarFormulario(){
    let cantidadErrores = 0;

    document.querySelectorAll('.salario').forEach(function(salario){
        const error = validarSalario(Number(salario.value));

        if(error){
            cantidadErrores++;
            salario.classList.add('error');
            mostrarErrores(error);
        }else{
            salario.classList.remove('error');
        }
    });

    return cantidadErrores;
}



//! BOTON AGREGAR
function crearInputLabel(){
    const $nodo = document.querySelector(`.salarios`);
    const $label = document.createElement('label');
    const $input = document.createElement('input');
    $label.textContent = "Integrante " + contadorClick;
    $label.id = `label${contadorClick}`;
    $input.id = `input${contadorClick}`;
    $input.className = 'salario';
    $input.type = 'number';
    $nodo.appendChild($label);
    $nodo.appendChild($input);
}

function mostrarBotonCalcular () {
    document.querySelector("#boton-calcular").style.display = "block";
}



//! BOTON QUITAR
function eliminarInputLabel(){
    document.querySelector(`#label${contadorClick}`).remove();
    document.querySelector(`#input${contadorClick}`).remove();
}

function eliminarBotonCalcular () {
    document.querySelector("#boton-calcular").style.display = "none";
}

function eliminarInformacion(){
    document.querySelectorAll('.informacion-container span').forEach(function(span){
        span.textContent = "";
    });
}


//! BOTON CALCULAR
function retornarArraySalario(){
    let arraySalario = [];

    document.querySelectorAll(`.salario`).forEach(function(salario){
        if(salario.value){
            arraySalario.push(Number(salario.value));
        }
    });
    return arraySalario;
}

function retornarMayorSalarioAnual(arraySalario) {
    let mayorSalario = 0;
    arraySalario.forEach(function(salario){
        if(mayorSalario < salario){
            mayorSalario = salario;
        }
    });
    return mayorSalario;
}

function retornarMenorSalarioAnual(arraySalario) {
    let menorSalario = arraySalario[0];
    arraySalario.forEach(function(salario){
        if(menorSalario > salario){
            menorSalario = salario;
        }
    });
    return menorSalario;
}

function retornarPromedioSalarioAnual(arraySalario) {
    let sumaSalarios = 0;
    arraySalario.forEach(function(salario){
        sumaSalarios += salario;
    });
    return sumaSalarios / arraySalario.length;
}



let contadorClick = 0;

//! BOTON AGREGAR
document.querySelector("#boton-agregar").onclick = function () {
    contadorClick++;
    eliminarInformacion()
    crearInputLabel();
    if(contadorClick === 1){
        mostrarBotonCalcular(); // Se muestra el boton cuando haya al menos 1 integrante, ya que si la ejecutamos en todo momento seria innecesario.
    }
}

//! BOTON QUITAR
document.querySelector("#boton-quitar").onclick = function () {
    if(contadorClick > 1){
        eliminarInputLabel();
        contadorClick--;
    }
    else if(contadorClick === 1){
        eliminarInputLabel();
        eliminarBotonCalcular();
        contadorClick--;
    }
    eliminarInformacion();
}

//! BOTON CALCULAR
document.querySelector("#boton-calcular").onclick = function () {
    eliminarInformacion();
    eliminarErrores();
    const arraySalario = retornarArraySalario();
    if(!validarFormulario()){
        document.querySelector(`#mayor-salario`).textContent = "Mayor salario anual: " + retornarMayorSalarioAnual(arraySalario);
        document.querySelector(`#menor-salario`).textContent = "Menor salario anual: " + retornarMenorSalarioAnual(arraySalario);
        document.querySelector(`#promedio-salario-anual`).textContent = "Salario promedio anual: " + retornarPromedioSalarioAnual(arraySalario);
        document.querySelector(`#promedio-salario-mensual`).textContent = "Salario promedio mensual: " + (retornarPromedioSalarioAnual(arraySalario) / 12);
    }
}
