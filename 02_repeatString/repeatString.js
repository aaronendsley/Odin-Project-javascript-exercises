const repeatString = function(string, num) {
    let newString;
    for(let i = 1; i<=num; i++){
        if(!newString){
            newString = string
        }else{
            newString = newString+string;
        }
       
        console.log(newString);
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
