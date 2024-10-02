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