/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false
    }
    let answerObj = {}
    for (let i = 0; i < s.length; i++) {
        answerObj[s[i]] ? answerObj[s[i]] = answerObj[s[i]] + 1 : answerObj[s[i]] = 1
    }
    for (let i = 0; i < t.length; i++) {
        if (!answerObj[t[i]]) {
            return false
        }
        answerObj[t[i]] = answerObj[t[i]] - 1
        if (answerObj[t[i]] == 0) {
            delete answerObj[t[i]];
        }
    }
    if (Object.keys(answerObj).length === 0){
        return true
    }
};