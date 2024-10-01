/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // let answer = 0;

    //   let roman = ["I", "V", "X", "L", "C", "D", "M"];
    //   let value = [1, 5, 10, 50, 100, 500, 1000];


    //   for (let i = 0; i < s.length; i++) {
    //     // console.log("roman.indexOf(s[i])",roman.indexOf(s[i]))
    //     // console.log("roman.indexOf(s[i+1])",roman.indexOf(s[i+1]))
    //     // console.log("value ", value[roman.indexOf(s[i])])
    //     if (roman.indexOf(s[i]) >= roman.indexOf(s[i + 1])) {
    //       // console.log("added if" ,  value[roman.indexOf(s[i])])
    //       answer = answer + value[roman.indexOf(s[i])];
    //     } else {
    //       // console.log("added else" ,  value[roman.indexOf(s[i + 1])] - value[roman.indexOf(s[i])] )
    //       answer =
    //         answer + (value[roman.indexOf(s[i + 1])] - value[roman.indexOf(s[i])]);
    //       i++;
    //     }

    //     // console.log(answer)
    //   }

    //   return answer;

    let answer = 0;

    let hashObject = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,

    };

    for (let i = 0; i < s.length; i++) {

        // console.log("s[i]", s[i], "value", hashObject[s[i]])

        if (hashObject[s[i]] >= hashObject[s[i + 1]] || i == s.length-1) {
            // console.log("added if" ,  hashObject[s[i]])
            answer = answer + hashObject[s[i]];
        } else {
            // console.log("added else" ,  hashObject[s[i+1]] - hashObject[s[i]])
            answer = answer + (hashObject[s[i+1]] - hashObject[s[i]]);
            i++;
        }
        //  console.log(answer)

    }

    return answer

};

// Hashmap is looking value way much faster than indexOf. It is O(1) vs. O(n)