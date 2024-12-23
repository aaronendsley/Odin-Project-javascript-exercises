const leapYears = function(year) {
    console.log(year);
    if ((year % 4) === 0){
        return true
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
