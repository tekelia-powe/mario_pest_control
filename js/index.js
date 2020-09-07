let total = 0;

document.getElementById("one").addEventListener("input", myFunction);
document.getElementById("two").addEventListener("input", myFunction);
document.getElementById("three").addEventListener("input", myFunction);

function myFunction() {
    const num1 = document.getElementById("one").value * 5;
    const num2 = document.getElementById("two").value * 7;
    const num3 = document.getElementById("three").value * 11;
    
    var total = parseInt(num1) + parseInt(num2) + parseInt(num3);
    document.getElementById("total").value = "$"+total;

  
}