let error = 0;

function play() {
  var comienzo = document.getElementById("start");
  var boton = document.getElementById("b-ok");
  var question = document.getElementById("question");

  comienzo.classList.add("d-none");
  boton.classList.add("d-none");
  question.classList.remove("d-none");
  document.getElementById("option1").classList.remove("d-none");
  document.getElementById("again").classList.add("d-none");
}

function vista1() {
  var opcion1 = document.getElementById("option1");
  var opcion2 = document.getElementById("option2");

  if (!opcion1.classList.contains("d-none")) {
    opcion1.classList.add("d-none");
    opcion2.classList.remove("d-none");
    error += 1;
    alert("Fallaste");
  } else {
    opcion1.classList.remove("d-none");
    opcion2.classList.add("d-none");
    alert("Fallaste");
    error += 1;
  }
  if (error == 4) {
    alert("Perdiste");
    opcion1.classList.add("d-none");
    opcion2.classList.add("d-none");
    question.classList.add("d-none");
    document.getElementById("again").classList.remove("d-none");
    error = 0;
  }

  if (error == 2) {
    alert("Ruerda que es un color pastel");
  }
}

function correcto() {
  alert("Correcto");
  document.getElementById("option1").classList.add("d-none");
  document.getElementById("option2").classList.add("d-none");
  question.classList.add("d-none");
  document.getElementById("again").classList.remove("d-none");
}
