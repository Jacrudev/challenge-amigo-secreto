//Variables.
let amigos = [];
let amigoSorteado = 0;
let cambiarBoton = 0;

//Funciones.
function agregarAmigo() {
    //Patrón de validación de entrada.
    const patronValidacion = /^[A-Za-z\s]+$/;
    //Capturar el valor de entrada en arrray amigos.
    let entradaNombre = document.getElementById('amigo').value;

    //Validar entrada.
    if (entradaNombre == '') { //Campo vacío.
        alert('Por favor, inserte un nombre.');
        return false;
    } else if (!patronValidacion.test(entradaNombre)){ //Caracteres extraños.
        alert('Solo se admiten letras');
        limpiarEntrada('amigo',"");
        return false;
    } else {
        //Actualizar array amigos.
        amigos.push(entradaNombre);
        listaHtml('listaAmigos', amigos)
        limpiarEntrada('amigo',"");
    }
    return;
}

//Borra cualquier valor ingresado en el campo amigo.
function limpiarEntrada(id,valor){
    document.getElementById(id).value = valor;
    return;
}

//Cambiar texto a un elemento html.
function asignarTextoElemento(id,texto) {
    document.getElementById(id).innerHTML = texto; //Cambia todo el contenido interno. 
    return;
}

//Actualiza la lista de amigos al usuario.
function listaHtml(id, lista) {
    asignarTextoElemento(id,'');
    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        document.getElementById(id).appendChild(li);
    }
    return;
}

//Sortear amigos
function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, ingrese al menos un nombre para poder realizar el sorteo.')
    } else {
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        asignarTextoElemento('resultado',`El amigo secreto es: ${amigos[indiceAleatorio]}`);
        amigoSorteado = amigos.splice(indiceAleatorio,1); //Amigo sorteado es eliminado del sorteo siguiente.
        asignarTextoElemento('listaAmigos',''); //Eliminar lista visible al usuario.
        //Condiciones de boton ocultar.
        document.getElementById('botonOcultar').removeAttribute('disabled'); 
        document.getElementById('imgBotonOcultar').src = "assets/oculto.png";
        cambiarBoton = 0;
    } 
    return;
}

//Oculta/muestra amigo sorteado
function ocultarAmigoSecreto() {
    switch (cambiarBoton) {
        case 1:
            asignarTextoElemento('resultado',`El amigo secreto es: ${amigoSorteado}`);
            document.getElementById('imgBotonOcultar').src = "assets/oculto.png";
            cambiarBoton--;
            break;
    
        case 0:
            asignarTextoElemento('resultado','El amigo secreto es: ***');
            document.getElementById('imgBotonOcultar').src = "assets/mostrar.png";  
            cambiarBoton++;
            break;
    }
}