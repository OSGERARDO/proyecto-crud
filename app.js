let listaProductos = [];

const objProducto = {
    id: '',
    nombre: '',
    cantidad:''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const cantidadInput = document.querySelector('#cantidad');
const btnAgregarInput = document.querySelector('#btnAgregar');


formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === "" || cantidadInput === "") {
        alert('Todos los campos son obligatorios');
        return;
    }
    if(editando) {
        editarProducto();
        editando = false;
    } else {
        objProducto.id = Date.now();
        objProducto.nombre = nombreInput.value;
        objProducto.cantidad = cantidadInput.value;

        agregarProducto();
}

}


