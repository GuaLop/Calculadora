//Funcion suma

function calculo(arr, operacion){
    let resultado = (a, b) =>{
        switch(operacion){
            case "suma":
                return a + b;
            case "resta":
                return a - b;
            case "multiplicacion":
                return a * b;
            case "division":
                return a / b;
        }
    }
    arr[2].value=resultado(Number(arr[0].value), Number(arr[1].value));
}