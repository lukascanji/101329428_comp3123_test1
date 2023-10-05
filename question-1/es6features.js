function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            reject("Input is not an array.");
        } else {
            let lowerCasedStrings = inputArray.filter(item => typeof item === 'string').map(stringItem => stringItem.toLowerCase());
            resolve(lowerCasedStrings);
        }
    });
}

// Test the function
lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(console.log)
    .catch(console.error);


// function lowerCaseWords(arr) {
//     return new Promise((resolve, reject) => {
//         if (!Array.isArray(arr)) {
//             reject(new Error('Input is not an array'));
//             return;
//         }
//
//         const filteredArray = arr.filter(item => typeof item === 'string')
//                                 .map(item => item.toLowerCase());
//
//         resolve(filteredArray);
//     });
// }
//
// lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
//     .then(console.log)
//     .catch(console.error);
