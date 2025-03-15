// Variables.
let amigos = [];
let entradaNombre = "";

const patronValidacion = /^[A-Za-z\s]+$/;

//Funciones.
function agregarAmigo() {
    //Capturar el valor de entrada en arrray amigos.
    entradaNombre = document.getElementById('amigo').value;

    //Validar entrada.
    if (entradaNombre == '') { //Campo vacío.
        alert('Por favor, inserte un nombre.');
        return false;
    } else if (!patronValidacion.test(entradaNombre)){ //Caracteres extraños.
        alert('Solo se admiten letras');
        limpiarEntrada('amigo',"");
        return false;
    } else {
        //Actualizar array amigos y limpiar campo.
        amigos.push(entradaNombre);
        listaHtml('listaAmigos', amigos)
        limpiarEntrada('amigo',"");
    }
    return console.log(amigos);
}

function limpiarEntrada(id,valor){
    let elementoHTML = document.getElementById(id);
    elementoHTML.value = valor;
    return;
}

function listaHtml(id, lista) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        elementoHTML.appendChild(li);
    }
}
