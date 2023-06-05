//Ocultar el munieco y mostrar la traduccion o encriptación junto con el boton copiar:
function mostrarSalida() {
    document.getElementById("inputSalida").style.display="block";
    document.getElementById("copiar").style.display="block";
    document.getElementById("salida").style.display="none";
}

//Cambiar las vocales por los valores dados:
function encriptarTexto () {
    var texto = document.querySelector("#textoCampo").value;
    var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".inputSalida").value = textoEncriptado;
    document.querySelector("#textoCampo").value;
    mostrarSalida();
}
var boton1 = document.querySelector("#encriptar");

//Deshacer la encriptación hecha siguiendo la normativa anterior(pero inversa en este caso):
function desencriptarTexto () {
    var texto = document.querySelector("#textoCampo").value;
    var textoDecifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".inputSalida").value = textoDecifrado;
    document.querySelector("#textoCampo").value;
    mostrarSalida();
}
var boton2 = document.querySelector("#desencriptar");


//Activa el comando ctrl+c seleccionando el texto de salida: 
function copiarTexto() {
    var texto = document.querySelector(".inputSalida");
    texto.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
}

//Rezise la ventana de los textos: