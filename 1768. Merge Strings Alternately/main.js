/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let mergeString = []
    let endPoint = word1.length > word2.length ? word1.length - 1 : word2.length - 1;

    // let endPoint = Math.max(word1.length, word2.length);

    for (let i = 0; i <= endPoint; i++) {

        // console.log("i", i)
        // console.log(word1.length - 1)
        // console.log(word2.length - 1)

        if (i <= word1.length - 1) {
            mergeString.push(word1[i])
        }
        if (i <= word2.length - 1) {

            mergeString.push(word2[i])


        }


    }

    mergeString = mergeString.join('')
    return mergeString

};


// Since strings are immutable, String concatenation will copy over the string to a new memory location which is not efficient. We can use an array which is mutable and by push values to its end is O(1) operation (instead of copying over string, which is O(n)). Once we have all the values in the array, we can join them to form a string. This is more efficient than concatenating strings.