const sumAll = function(start, stop) {
    let sum = 0; 
    for(let i = start; i <= stop; i++){
        sum += i;
        console.log(i);
        if(i === stop){
            console.log(sum);
            return sum;
        }
       
    }
};

// Do not edit below this line
module.exports = sumAll;
