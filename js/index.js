var MultiInicio = true
var TextArea = ""
var Operation = 0

document.getElementById("addButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        if(document.getElementsByClassName("inputNumber")[0].value != "") {
            let TempSuma = parseFloat(document.getElementsByClassName("inputNumber")[0].value)
            document.getElementsByClassName("inputNumber")[0].value = ""
            TextArea = TextArea+String(TempSuma)+"+"
            document.getElementById("logInformation").textContent = TextArea
        }
    }
})

document.getElementById("substractButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        if(document.getElementsByClassName("inputNumber")[0].value != "") {
            let TempResta = parseFloat(document.getElementsByClassName("inputNumber")[0].value)
            document.getElementsByClassName("inputNumber")[0].value = ""
            TextArea = TextArea+String(TempResta)+"-"
            document.getElementById("logInformation").textContent = TextArea
        }
    }
})


document.getElementById("multiplicationButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        if(document.getElementsByClassName("inputNumber")[0].value != "") {
            let TempMulti = parseFloat(document.getElementsByClassName("inputNumber")[0].value)
            document.getElementsByClassName("inputNumber")[0].value = ""
            TextArea = TextArea+String(TempMulti)+"*"
            document.getElementById("logInformation").textContent = TextArea   
        }
    }
})

document.getElementById("divisionButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error") 
        document.getElementById("inputNumber").disabled = true
    else {
        if(document.getElementsByClassName("inputNumber")[0].value == "" || document.getElementsByClassName("inputNumber")[0].value == "0") {
            document.getElementsByClassName("inputNumber")[0].value = "Error"
            document.getElementById("inputNumber").disabled = true
            console.log(document.getElementsByClassName("inputNumber")[0].value)
        } else {
            let TempDiv = parseFloat(document.getElementsByClassName("inputNumber")[0].value)
            document.getElementsByClassName("inputNumber")[0].value = ""
            TextArea = TextArea+String(TempDiv)+"/"
            document.getElementById("logInformation").textContent = TextArea
        }
    }
})

document.getElementById("equalButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        var expression = TextArea+document.getElementById("inputNumber").value
        var copy = expression;

        expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
        var numbers = copy.split(/[^0-9\.]+/);
        var operators = expression.split("#").filter(function(n){return n});
        var result = [];

        for(i = 0; i < numbers.length; i++){
            result.push(numbers[i]);
            if (i < operators.length) result.push(operators[i]);
        }

        Operation = parseFloat(result[0])

        for(var iC = 0; iC < result.length; iC++) {
            if(result[iC] == "+") {  
                Operation = Operation + parseFloat(result[iC+1])
            }
            if(result[iC] == '-') {
                Operation = Operation - parseFloat(result[iC+1])
            }
            if(result[iC] == '*') {
                Operation = Operation * parseFloat(result[iC+1])
            }
            if(result[iC] == '/') {
                Operation = Operation / parseFloat(result[iC+1])
            }
        }
        TextArea = TextArea+document.getElementsByClassName("inputNumber")[0].value+"="+Operation
        document.getElementById("resultValue").value = Operation
        document.getElementById("logInformation").textContent = TextArea
        document.getElementsByClassName("inputNumber")[0].value = ""
    }
})

document.getElementById("resetButton").addEventListener("click", function(){ 
    document.getElementById("resultValue").value = ""
    document.getElementsByClassName("inputNumber")[0].value = ""
    document.getElementById("inputNumber").disabled = false
    document.getElementById("logInformation").textContent = ""
    TextArea = ""
})