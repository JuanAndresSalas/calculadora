
var pantalla = "";
var operacion = "";
var operandoA = undefined;
var operandoB = undefined;
var resultado = 0;




//Operaciones, clear y resultado

$("#suma").click(function(){
    if(operandoA == resultado ){
        operandoB = parseFloat(pantalla);
        operacion = "suma";
        $("#resultado").text("+");
        pantalla = ""
        
    }else{
        operandoA = parseFloat(pantalla);
        operacion = "suma";
        $("#resultado").text("+");
        pantalla = ""
    }
})

$("#resta").click(function(){
    if(operandoA == resultado){
        operandoB = parseFloat(pantalla);
        operacion = "resta";
        $("#resultado").text("-");
        pantalla = ""
        
    }else{
        operandoA = parseFloat(pantalla);
        operacion = "resta";
        $("#resultado").text("-");
        pantalla = ""
    }
})

$("#multiplicacion").click(function(){
    if(operandoA == resultado){
        operandoB = parseFloat(pantalla);
        operacion = "multiplicacion";
        $("#resultado").text("*");
        pantalla = ""
        
    }else{
        operandoA = parseFloat(pantalla);
        operacion = "multiplicacion";
        $("#resultado").text("*");
        pantalla = ""
    }
    
    
})
$("#division").click(function(){
    if(operandoA == resultado){
        operandoB = parseFloat(pantalla);
        operacion = "division";
        $("#resultado").text("/");
        pantalla = ""
        
    }else{
        operandoA = parseFloat(pantalla);
        operacion = "division";
        $("#resultado").text("/");
        pantalla = ""
    }
})

$("#clear").click(function(){
    operandoA = undefined;
    operandoB = undefined;
    operacion ="";
    pantalla = "";
    resultado = 0
    $("#resultado").text(pantalla);
})

$("#igual").click(function(){
    operandoB = parseFloat(pantalla);

    if(pantalla == "" || (operandoB == 0 && operacion == "division")){
        $("#resultado").text("ERROR");
        
    }else if(operandoB != 0){
        switch(operacion){
            case "suma":
                operandoB = parseFloat(pantalla);
                resultado = operandoA + operandoB;
                $("#resultado").text(resultado)
                operandoA = resultado ;
                operandoB = undefined;
                operacion ="";
                break;
            case "resta":
                operandoB = parseFloat(pantalla);
                resultado = operandoA - operandoB;
                $("#resultado").text(resultado);
                operandoA = resultado;
                operandoB = undefined;
                operacion ="";
                break;
            case "division":
                operandoB = parseFloat(pantalla);
                resultado = operandoA / operandoB;
                $("#resultado").text(resultado);
                operandoA = resultado;
                operandoB = undefined;
                operacion ="";
                break;

            case "multiplicacion":
                operandoB = parseFloat(pantalla);
                resultado = operandoA * operandoB;
                $("#resultado").text(resultado);
                operandoA = resultado;
                operandoB = undefined;
                operacion ="";
                break;
        }
    }
})


//Fin operaciones, clear y resultado

//Números

$("#uno").click(function(){
    pantalla = pantalla + "1";
    $("#resultado").text(pantalla);
})

$("#dos").click(function(){
    pantalla = pantalla + "2";
    $("#resultado").text(pantalla);
})

$("#tres").click(function(){
    pantalla = pantalla + "3";
    $("#resultado").text(pantalla);
})

$("#cuatro").click(function(){
    pantalla = pantalla + "4";
    $("#resultado").text(pantalla);
})

$("#cinco").click(function(){
    pantalla = pantalla + "5";
    $("#resultado").text(pantalla);
})

$("#seis").click(function(){
    pantalla = pantalla + "6";
    $("#resultado").text(pantalla);
})

$("#siete").click(function(){
    pantalla = pantalla + "7";
    $("#resultado").text(pantalla);
})

$("#ocho").click(function(){
    pantalla = pantalla + "8"
    $("#resultado").text(pantalla);
})

$("#nueve").click(function(){
    pantalla = pantalla + "9"
    $("#resultado").text(pantalla);
})

$("#cero").click(function(){
    pantalla = pantalla + "0";
    $("#resultado").text(pantalla);
})

$("#punto").click(function(){
    pantalla = pantalla + "."
    $("#resultado").text(pantalla);
})



