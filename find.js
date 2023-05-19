const numbers = [ 23, 3, 8, 1, 0, 5, 30, -2]
let minima = Infinity
let maxima = -Infinity

for(let number of numbers){
    if(number > maxima)
    maxima = number

    if(number < minima)
    minima = number
}

return{
    minima: minima,
    maxima: maxima
};

console.log(maxima)
console.log(minima)

console.log(minima,maxima)
