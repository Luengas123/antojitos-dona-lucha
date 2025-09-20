export function recomendarPlatillo() {
  const tipo = document.getElementById("preferencia").value;
  const momento = document.getElementById("momento").value;
  const cantidad = document.getElementById("cantidad").value;

  let mensaje = "Te recomendamos: ";

  if (tipo === "vegetariano") {
    if (momento === "desayuno") mensaje += "una quesadilla de flor de calabaza 🌼";
    else if (cantidad === "ligero") mensaje += "una ensalada de nopales 🥗";
    else mensaje += "unas gorditas de papa con queso 🧀";
  } else if (tipo === "picante") {
    if (momento === "cena") mensaje += "una tostada de tinga 🔥";
    else mensaje += "una gordita de chicharrón 🌶️";
  } else {
    if (cantidad === "ligero") mensaje += "unos tacos dorados 🐔";
    else mensaje += "enchiladas de carne deshebrada 🥩";
  }

  document.getElementById("recomendacion").innerText = mensaje;
}
