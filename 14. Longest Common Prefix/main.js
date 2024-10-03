/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 1. find the min length of the shortest value
    // 2. loop through the position 0 till min length to check strs[0] against strs[i] if character is match, if not break

    // let minLength = Number.MAX_SAFE_INTEGER;
    // strs.forEach((element) => {
    //     element.length < minLength ? minLength = element.length : minLength = minLength
    // })
    // let position = 0
    // while( position < minLength) {

    //     for (let index=1 ; index< strs.length; index++){
    //         if (strs[0][position] != strs[index][position]){
    //             return strs[0].slice(0, position)
    //         }
    //     }
    //     position++
    // }
    // if (position == minLength) {
    //     return strs[0].slice(0, position)
    // }

    // *************************************************************

    let minLength = Number.MAX_SAFE_INTEGER;
    strs.forEach((element) => {
        element.length < minLength ? minLength = element.length : minLength = minLength
    })
    let position = 0
    let answer = ""
    while (position < minLength) {

        for (let index = 1; index < strs.length; index++) {
            if (strs[0][position] != strs[index][position]) {
                return answer
            }
        }
        answer = answer+strs[0][position]
        position++
    }
    if (position == minLength) {
        return answer
    }

    // *************************************************************

    // strs.sort()

    // let answer =""
    
    // for(let i=0; i< Math.min(strs[0].length, strs[strs.length-1].length); i++ ){
    //     if(strs[0][i] != strs[strs.length-1][i]){
    //         return answer
    //     }
    //     answer = answer+strs[0][i]
    // }

    // return answer
};

// 1st approach is to find the min length of the shortest value and loop through the position 0 till min length to check strs[0] against strs[i] if character is match, if not break
// 2nd approach is to sort the array lexicographic and compare the first and last value of the array. If the character is not the same, return the answer. If the character is the same, add the character to the answer. Return the answer at the end of the loop.