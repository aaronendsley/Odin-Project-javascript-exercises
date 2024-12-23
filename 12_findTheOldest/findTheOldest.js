const findTheOldest = function(arr) {
    const date = new Date().getFullYear();

    let oldest = arr.map(person => {
        if(person.yearOfDeath){
            person.age = person.yearOfDeath - person.yearOfBirth
            return person; 
        }else{
            person.age = date - person.yearOfBirth;
            return person
        }
     }).sort((a,b)=> {
        if(a.age > b.age){
            return 1
        }else{
            return -1
        }
     });
    
     return oldest[oldest.length -1];

   





   
    //find the oldest person 
        //check year of birth to current year if yearOfDeath is undefined
   

};

// Do not edit below this line
module.exports = findTheOldest;
