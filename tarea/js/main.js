const $form = document.formulario;

document.querySelector('#enviar-carta').onclick = validarFormulario;

function validarFormulario(){
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        'descripcion-regalo': validarDescripcionRegalo(descripcionRegalo)
    };

    eliminarErrores();
    const envioExitoso = manejarErrores(errores) === 0;

    if(envioExitoso){
        $form.className = "oculto";
        document.querySelector('#exito').className = "";
        redireccionarUsuario();
    }
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            cantidadErrores++;
            $form[key].className = "error";
            mostrarErrores(error);
        }else{
            $form[key].className = "";
        }
    });
    return cantidadErrores;
}

function mostrarErrores(error){
    const errores = document.querySelector('#errores');
    const elementoLi = document.createElement('li');
    elementoLi.textContent = error;

    errores.appendChild(elementoLi);
}

function eliminarErrores(){
    const errores = document.querySelector('#errores');
    const elementosLi = document.querySelectorAll(`#errores li`);

    elementosLi.forEach(function(elementoLi){
        errores.removeChild(elementoLi);
    });

}

function redireccionarUsuario(){
    setTimeout(function(){
        window.location.href = 'file:///E:/VisualStudio/introduccion-a-js-master/js-xmas-edition/wishlist.html';
    }, 5000);
    // setTimeout("window.location.href = 'file:///E:/VisualStudio/introduccion-a-js-master/js-xmas-edition/wishlist.html';", 5000);
}