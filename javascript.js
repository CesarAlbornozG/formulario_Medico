//fuente verificar rut: https://gist.github.com/donpandix/f1d638c3a1a908be02d5
//biblioteca: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference

//^ no puede haber nada antes de este caracter, 
//[0-9]{7,8} para que el sistema permita numeros del 0 al 9 y un rango limitado de 7 u 8 digitos,
//- el guion indica que debe haber un guion despues de los numeros,
//[0-9kK]{1} esto indica que el sistema aceptara un solo caracter ya sea el rango de numeros indicados o la letra k minusc o K mayusc
//$ este caracter indica el fin de la cadena para evitar que exista algo despues del digito verificador

function validarRut(rut) {
    return /^[0-9]{7,8}-[0-9kK]{1}$/.test(rut);
}

//funcion para guardar los atributos ingresados
function guardarRegistro() {
    const rut = document.getElementById('rut').value.trim();
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const estado = document.getElementById('estado').value;
    const comentarios = document.getElementById('comentarios').value.trim();


    //validar campos

    if (!validarRut(rut)) {
        alert("Rut invalido, utilice el formato de ejemplo");
        return;
    }
    if (!nombres || !apellidos || !direccion || !ciudad || !telefono || !email || !fecha || !estado) {
        alert("Campo invalido, ingrese correctamente sus datos");
        return;
    }

    let registro = { rut, nombres, apellidos, direccion, ciudad, telefono, email, fecha, estado, comentarios };

    let registros = JSON.parse(localStorage.getItem('fichas')) || [];


    

}

// creamos la funcion cerrarFormulario(), el sistema nos confirmara si queremos cerrarlo, y por medio de la funcion window.close, la pestaña se cerrará.
    function cerrarFormulario() {
        if (confirm("¿Desea cerrar el formulario?")) {
            window.close();
        }
    }


