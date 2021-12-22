import { Mascota } from "./mascota.js";

//Inputs
const nomPropietario = document.querySelector("#propietario");
const numTelefono = document.querySelector("#telefono");
const nomDireccion = document.querySelector("#direccion");
const nomMascota = document.querySelector("#nombreMascota");
const nomTipo = document.querySelector("#tipo");
const nomEnfermedad = document.querySelector("#enfermedad");


//Submit de formulario
$('form').on('submit', function(ev) {
    ev.preventDefault();

    let animalselect = new Mascota(nomPropietario.value, nomDireccion.value, numTelefono.value, nomTipo.value, nomMascota.value, nomEnfermedad.value);

    $("#listUl").html(`<li>${animalselect.datosPropietarios()}</li>
    <li> ${animalselect.tipo}, mientras que el nombre de la mascota es: ${animalselect.getNombreDeLamascota()} y la enfermedad es: ${animalselect.getObtEnfermedad()}</li>`);

});