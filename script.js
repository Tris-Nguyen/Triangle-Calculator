// TRIANGLE FORMULAS CALCULATOR

// EVENT LISTENERS
var calcBtn = document
  .getElementById("calcBtn")
  .addEventListener("click", calculateAnswers);

var clearBtn = document
  .getElementById("clearBtn")
  .addEventListener("click", clearAnswers);

var decimalsInput = document.getElementById("decimals");

// EVENT FUNCTION CALCULATE ANSWERS
function calculateAnswers() {
  // Input
  var sideA = +document.getElementById("LengthA").value;
  var sideB = +document.getElementById("LengthB").value;
  var unitSelect = document.getElementById("unit-select").value;

  var perOut = document.getElementById("perimeter-span");
  var areaOut = document.getElementById("area-span");
  var hypOut = document.getElementById("hyp-span");
  var hypSqurOut = document.getElementById("hypsqr-span");

  let sideC = Math.sqrt(sideA ** 2 + sideB ** 2);

  // Process
  let perimeter = sideA + sideB + sideC;
  let area = (sideA * sideB) / 2;
  let hypotenuse = sideA ** 2 + sideB ** 2;

  // Output
  perOut.innerHTML = perimeter.toFixed(decimalsInput.value) + " " + unitSelect;
  areaOut.innerHTML = area.toFixed(decimalsInput.value) + " " + unitSelect;
  hypOut.innerHTML = hypotenuse.toFixed(decimalsInput.value) + " " + unitSelect;
  hypSqurOut.innerHTML =
    Math.sqrt(hypotenuse).toFixed(decimalsInput.value) + " " + unitSelect;

  // Clears input
  document.getElementById("LengthA").value = "";
  document.getElementById("LengthB").value = "";
  document.getElementById("decimals").value = "";
  document.getElementById("unit-select").value = "";
}

// EVENT FUNCTION CLEARING ANSWERS
function clearAnswers() {
  var perOut = document.getElementById("perimeter-span");
  var areaOut = document.getElementById("area-span");
  var hypOut = document.getElementById("hyp-span");
  var hypSqurOut = document.getElementById("hypsqr-span");

  perOut.innerHTML = "_____";
  areaOut.innerHTML = "_____";
  hypOut.innerHTML = "_____";
  hypSqurOut.innerHTML = "_____";
}
