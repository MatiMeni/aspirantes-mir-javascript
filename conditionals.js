function calcularColor(num){
    var color;
    if (num === 1){
        color = "Negro";
    } else if (num === 2){
        color = "Blanco";
    } else if (num === 3){
        color = "Rojo";
    } else{
        color = "Verde";
    }
    return "El color es " + color;

}
console.log(calcularColor(2));