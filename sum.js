function sum(numero){
    let total = 0;
    for(let i = 1; i < numero; i++){
        total = total + i;
    }
    total = total + numero
    return total
}
console.log(sum(15));