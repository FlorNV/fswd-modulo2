/* 1 - ACCESO A LOS ELEMENTOS DEL DOM */

// // GET ELEMENT BY ID
// let parrafo1 = document.getElementById("para1");
// console.log(parrafo1);
// console.log(parrafo1.textContent);

// //QUERY SELECTOR
// const elementoH1 = document.querySelector("h1");
// console.log(elementoH1);
// console.log(elementoH1.textContent);

// const lista = document.querySelector(".list");
// console.log(lista);
// console.log(lista.textContent);

// /* 2 - AÑADIR ELEMENTOS AL DOM */
// let listaDesordenada = document.createElement("ul");
// document.body.appendChild(listaDesordenada);

// let listaElemento1 = document.createElement("li");
// listaElemento1.textContent = "Libreria React";
// listaDesordenada.appendChild(listaElemento1);

// let listaElemento2 = document.createElement("li");
// listaElemento2.textContent = "Framework Angular";
// listaDesordenada.appendChild(listaElemento2);

// /* 3 - ELIMINAR ELEMENTOS */

// let parrafoEliminar = document.getElementById("parrafo-a-eliminar");
// parrafoEliminar.parentNode.removeChild(parrafoEliminar);

// /* 4 - OBTENER VALORES DE INPUTS */

// document.getElementById("nombre").value = "Harry";
// document.getElementById("edad").value = 13;

// let inputValue1 = document.querySelector("#nombre").value;
// let inputValue2 = document.querySelector("#edad").value;

// console.log(inputValue1);
// console.log(inputValue2);

// const saludar = () => {
//   document.querySelector(".saludo").textContent = "Hola!";
// };

// document.getElementById("saludo").addEventListener("click", saludar);

// let fecha1 = new Date(1812, 4, 10).getTime();
// let fecha2 = new Date(2012, 4, 10).getTime();

/* Async - Await */
async function getIp() {
  try {
    //Primer llamada. Petición de la ip
    let response = await fetch("https://api.ipify.org/?format=json");
    let ipResponse = await response.json();
    console.log(ipResponse);

    //Segunda llamada. Peticion de la localización
    let responseLocation = await fetch(
      "http://ip-api.com/json/" + ipResponse.ip
    );
    let locationResponse = await responseLocation.json();
    console.log(locationResponse);
  } catch {
    console.log("Algo paso, no se pudo resolver...");
  }
}
getIp();
