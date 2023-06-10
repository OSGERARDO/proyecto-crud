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
        //Editar Producto
        editarProducto();
        editando = false;
    } else {
        objProducto.id = Date.now();
        objProducto.nombre = nombreInput.value;
        objProducto.cantidad = cantidadInput.value;

        agregarProducto();
}

}

function agregarProducto() {
    listaProductos.push({...objProducto});

    mostrarProductos();

    formulario.reset(); //limpiar los input

    limpiarObjeto();

}

function limpiarObjeto() {  //limpiar objeto
    objProducto.id = '';
    objProducto.nombre = '';
    objProducto,cantidad = '';
}





function mostrarProductos() {

    limpiarHTML();

    const divProductos = document.querySelector('.div-productos')

    listaProductos.forEach( producto => {
        const {id, nombre, cantidad} = producto;

        const parrafo = document.createElement('p');
        parrafo.textContent = ` ${id} - ${nombre} - ${cantidad} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclik = () => cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);


        const eliminarBoton = document.createElement('button');
        //eliminarBoton.onclik = () => eliminarProducto(id);//
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divProductos.appendChild(parrafo);
        divProductos.appendChild(hr);




    });

}

function cargarProducto(producto) {
    const {id, nombre, cantidad} = producto;

    nombreInput.value = nombre;
    cantidadInput.value = cantidad;

    objProducto.id = id;

    formulario.querySelector('button[type="submit"]').textContent ='Actualizar';

    editando = true;
}

function editarProducto () {
    objProducto.nombre = nombreInput.value;
    objProducto.cantidad = cantidadInput.value;

    listaProductos.map( producto => {

        if(producto.id === objProducto.id) {
            producto.id = objProducto.id;
            producto.nombre = objProducto.nombre;
            producto.cantidad = objProducto.cantidad;
        }






    })
limpiarHTML();
mostrarProductos();

formulario.reset();

formulario.querySelector('button[type="submit]').textContent = 'Agregar'

editando = false;

}






function limpiarHTML() {
    const divProductos = document.querySelector('.div-productos')
    while(divProductos.firstChild) {
           divProductos.removeChild(divProductos.firstChild);
    }


}




