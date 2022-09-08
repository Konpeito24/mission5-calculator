
function clickbutton(result) {
    if(result.value == "=") {
    document.calcurator.display.value = eval(document.calcurator.display.value);
    } else if (result.value == "C") {
    document.calcurator.display.value = "";
    } else {
    if (result.value == "×") {
        result.value = "*";
    } else if (result.value == "÷") {
        result.value = "/";
    } 
    document.calcurator.display.value += result.value;
    document.calcurator.multi_result.value = "×";
    document.calcurator.div_result.value = "÷";
    }
}
