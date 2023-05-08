 function bmi(){
    var h = document.getElementById('heightInput').value
    var w = document.getElementById('weightInput').value
    // var bmi = w /(h/100*h /100)
    var bmi = w /(h*h)
    var total = bmi.toFixed(2)
    document.getElementById('result1').innerHTML = "" + total
 }