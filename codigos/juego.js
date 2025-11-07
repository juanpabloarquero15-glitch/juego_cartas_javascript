function repartir() {
    valentina = Math.floor(Math.random() * 52) + 1;

    //obtener contenedor u objeto de desp´liegue de las cartas (mesa)
    mesa = document.getElementById("mesa");

    //Crear una imagen en el documento html
    carta = document.createElement("img");
    //obtener la imagen de la carta
    carta.src = "imagenes/Cartas/Carta" + valentina + ".JPG";

    //agregar la imagen al contenedor
    mesa.appendChild(carta);

    window.alert(valentina);
}