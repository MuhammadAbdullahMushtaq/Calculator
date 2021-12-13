function input(value){
    var input = document.getElementById("input");
    input.value += value;
}


function results(){
    try{
        var input = document.getElementById("input");
        var result = eval(input.value);
        input.value = result;
    }
    catch(err){
        alert("Invalid Entry... Operators Cannot be Entered in Pair.......")
    }
}


function clearInput(){
    var input = document.getElementById("input");
    input.value = input.value.slice(0,-1);
}


function allClear(){
    var input = document.getElementById("input");
    input.value = "";
}