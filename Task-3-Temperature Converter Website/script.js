function convertToFar() {
    var celsius = parseFloat(document.getElementById("inputCelsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerText = celsius + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit";
}
