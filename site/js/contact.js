"use strict"
let form = document.querySelector('#form');
form.addEventListener('submit', agregar);

function agregar(e){
  e.preventDefault();

  let formData = new FormData(form);
  
  let nombre = formData.get("nombre");
  let email = formData.get("email");
  let comentario = formData.get("comentario");
  
  console.log("Nombre: " + nombre, "Email: " + email,"Comentario: " + comentario);


}