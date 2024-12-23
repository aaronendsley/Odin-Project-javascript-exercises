const fibonacci = function(num) {
    const stop = parseInt(num);
    let first = 1;
    let second = 1;
    let fibonacciArray = [0, 1, 1];

    if(stop < 0) return "OOPS";
    if(stop === 0) return fibonacciArray[stop];
    for(let i = 1; i <= stop; i++){
        let newnum = first + second;
            first = second;
            second = newnum;
            fibonacciArray.push(newnum);
            if(i === stop){
                console.log(fibonacciArray[stop])
                return fibonacciArray[stop]; 
            }
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
