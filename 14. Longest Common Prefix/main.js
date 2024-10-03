/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 1. find the min length of the shortest value
    // 2. loop through the position 0 till min length to check strs[0] against strs[i] if character is match, if not break

    let minLength = Number.MAX_SAFE_INTEGER;
    strs.forEach((element) => {
        element.length < minLength ? minLength = element.length : minLength = minLength
    })
    let position = 0
    while( position < minLength) {

        for (let index=1 ; index< strs.length; index++){
            if (strs[0][position] != strs[index][position]){
                return strs[0].slice(0, position)
            }
        }
        position++
    }
    if (position == minLength) {
        return strs[0].slice(0, position)
    }
};