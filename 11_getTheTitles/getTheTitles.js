const getTheTitles = function(titles) {
    if(Array.isArray(titles)){
        return titles.map(book => book.title);
    }
};

// Do not edit below this line
module.exports = getTheTitles;
