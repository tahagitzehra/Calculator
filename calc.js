//this function clear screen
function clearScreen() {
    document.getElementById("screen").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("screen").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("screen").value;
    var q = eval(p);
    document.getElementById("screen").value = q;
}