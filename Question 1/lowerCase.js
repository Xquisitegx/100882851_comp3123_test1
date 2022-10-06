const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCase(mixedArray){
    
    return new Promise((resolve, reject) =>{

        if(mixedArray.length >= 0 && Array.isArray(mixedArray)){
            const validStrings = mixedArray.filter((arrayEle) => typeof arrayEle === "string");
            const mappedArray = validStrings.map((filteredArray) => filteredArray.toLowerCase());
            resolve(mappedArray);
        }else{
            reject("Not valid, sorry.")
        }
    })
}

lowerCase(mixedArray)
    .then((value) => console.log(value))
    .catch((error) => console.log(error))