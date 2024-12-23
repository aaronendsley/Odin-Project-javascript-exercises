const removeFromArray = function(arrayOfThings, ...items) {
    for(let i =0; i <= (items.length - 1); i++ ){
        let arr = arrayOfThings.indexOf(items[i]);
        if(arr > -1){
           arrayOfThings.splice(arr, 1); // slice method mutates the original array
           if(i >= (items.length - 1)){
            return arrayOfThings
           }   
        }
    }
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
