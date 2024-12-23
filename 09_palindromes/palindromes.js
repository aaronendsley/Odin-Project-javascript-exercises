const palindromes = function (word) {
    const ALPHA_NUMERICAL = "abcdefghijklmnopqrstuvwxyz1234567890";
    word = word.toLowerCase().split('').filter(character => ALPHA_NUMERICAL.includes(character)).join('');
    let punctuation;
    let reversed = word.split('').reverse().join('');
    console.log(word);

   

    
    //  if(punctuation){
    //     reversed = `${reversed}${punctuation}`;
    //  }
     
    // filter(function(character){
    //     if(ALPHA_NUMERICAL.some(item => item === character)){
    //         return character;
    //     }else{
    //         if(punctuation){
    //             punctuation += character;
    //         }else{
    //             punctuation = character;
    //         }
    //     }
    // })
    
    
    if(reversed === word){
        return true;
    }

        return false;
    
   
};

//complete 

// Do not edit below this line
module.exports = palindromes;


