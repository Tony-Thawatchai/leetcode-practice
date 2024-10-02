/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    // for (let i = 0; i < s.length; i++) {
    //     // console.log("s[i]", s[i])
    //     // console.log("t", t)
    //     // console.log(t.indexOf(s[i]))
    //     if (t.indexOf(s[i]) == -1) {
    //         return false
    //     }
    //     if (t.indexOf(s[i]) >= 0) {
    //         t = t.slice(t.indexOf(s[i]) + 1)
    //         // console.log("t after slice", t)
    //     }
    // }
    // return true



    let j = 0
    for (let i = 0; i < t.length; i++) {
        console.log("s[j]", s[j])
        console.log("t[i]", t[i])
        if (s[j] == t[i]) {
            j++
        }
        if (j > s.length-1){
            return true
        }
    }
    return false
};

// Two Pointer Technique is used here. We have two pointers, one for the string s and one for the string t. We iterate through the string t and check if the character at the pointer of s is equal to the character at the pointer of t. If it is, we increment the pointer of s. If the pointer of s is equal to the length of s, we return true. If we finish iterating through t and the pointer of s is not equal to the length of s, we return false.