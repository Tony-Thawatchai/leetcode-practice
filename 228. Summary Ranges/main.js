/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let startRange = null;
    let endRange = null;
    let answer = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 == nums[i + 1]) {
            if (startRange == null) {
                startRange = nums[i]
                console.log("nums[i]", nums[i])
                console.log("startRange", startRange)
            } 
        } else {
            if (startRange != null) {
                endRange = nums[i]
                console.log("endRange", endRange)
                answer.push(startRange + "->" + endRange)
                console.log("answer", answer)
                startRange = null
            } else {
                answer.push(nums[i].toString())
                console.log("else answer", answer)
            }
        }


    }

    return answer

};