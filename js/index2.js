var Resultado = 0
var MultiInicio = true
var TextArea = ""

document.getElementById("addButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        if(document.getElementsByClassName("inputNumber")[0].value == "") {
            document.getElementsByClassName("inputNumber")[0].value = 0
        }
        let TempSuma = parseInt(document.getElementsByClassName("inputNumber")[0].value)
        document.getElementsByClassName("inputNumber")[0].value = ""
        Resultado = Resultado + TempSuma;

        TextArea = TextArea + "+"+String(Resultado)
        document.getElementById("logInformation").textContent = TextArea
        
        console.log(Resultado)
    }
})

document.getElementById("substractButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        if(document.getElementsByClassName("inputNumber")[0].value == "") {
            document.getElementsByClassName("inputNumber")[0].value = 0
        }
        let TempResta = parseInt(document.getElementsByClassName("inputNumber")[0].value)
        document.getElementsByClassName("inputNumber")[0].value = ""
        Resultado = Resultado - TempResta;

        TextArea = TextArea + "-"+String(Resultado)
        document.getElementById("logInformation").textContent = TextArea

        console.log(Resultado)
    }
})


document.getElementById("multiplicationButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        if(document.getElementsByClassName("inputNumber")[0].value == "") {
            document.getElementsByClassName("inputNumber")[0].value = 0
        }
        let TempMulti = parseInt(document.getElementsByClassName("inputNumber")[0].value)
        document.getElementsByClassName("inputNumber")[0].value = ""
        if (MultiInicio == true) {
            Resultado = TempMulti
            MultiInicio = false
        } else {
            Resultado = Resultado * TempMulti;
        }
        TextArea = TextArea + "*"+String(Resultado)
        document.getElementById("logInformation").textContent = TextArea
        console.log(Resultado)
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
            let TempDiv = parseInt(document.getElementsByClassName("inputNumber")[0].value)
            document.getElementsByClassName("inputNumber")[0].value = ""
            Resultado = Resultado / TempDiv;
            TextArea = TextArea + "/"+String(Resultado)
            document.getElementById("logInformation").textContent = TextArea
            console.log(Resultado)
        }
    }
})

document.getElementById("equalButton").addEventListener("click", function(){ 
    if(document.getElementsByClassName("inputNumber")[0].value == "Error")
        document.getElementById("inputNumber").disabled = true
    else {
        document.getElementById("resultValue").value = Resultado
        console.log(Resultado)
        TextArea = TextArea + "="+String(Resultado)
        document.getElementById("logInformation").textContent = TextArea
    }
})

document.getElementById("resetButton").addEventListener("click", function(){ 
    Resultado = 0
    document.getElementsByClassName("inputNumber")[0].value = ""
    document.getElementById("inputNumber").disabled = false
    document.getElementById("logInformation").textContent = ""
})