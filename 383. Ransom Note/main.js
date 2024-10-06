var canConstruct = function(ransomNote, magazine) {
    // 1. create object with key of character from magazine and value equal to how many time it appear in magazine
    // 2. loop through ransomNote if i character is in object. If not, return false immediately. If yes, minus value by 1. 

    let magazineObj = {}
    for (let i=0; i<magazine.length; i++){
        if(magazineObj[magazine[i]]){
            magazineObj[magazine[i]] = magazineObj[magazine[i]] + 1
        } else {
            magazineObj[magazine[i]] =  1
        }
    }
    for (let i=0; i<ransomNote.length ; i++){
        if(magazineObj[ransomNote[i]] === undefined ){
            return false
        } else {
            magazineObj[ransomNote[i]] = magazineObj[ransomNote[i]] - 1
            if(magazineObj[ransomNote[i]] == 0){
                delete magazineObj[ransomNote[i]];
            }
        }
    }
    return true

    // ================

    // let magazineObj = {}
    // for (let i=0; i<magazine.length; i++){
    //     if(magazineObj[magazine[i]]){
    //         magazineObj[magazine[i]] = magazineObj[magazine[i]] + 1
    //     } else {
    //         magazineObj[magazine[i]] =  1
    //     }
        
    // }
    // for (let i=0; i<ransomNote.length ; i++){
    //     if(magazineObj[ransomNote[i]] === undefined || magazineObj[ransomNote[i]] == 0){
    //         return false
    //     } else {
    //         magazineObj[ransomNote[i]] = magazineObj[ransomNote[i]] - 1
    //     }
    // }
    // return true


};

// O(m+n) time complexity, where m is the length of magazine and n is the length of ransomNote.
// O(26) space complexity, as the maximum number of keys in the object is 26 (number of lowercase English letters).