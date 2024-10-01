/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let distance = null;
    let answer = "";

    nums.forEach((element) => {
        let currentDistance = element - 0;

        if (currentDistance < 0) {

            currentDistance = -currentDistance 
        }

        if (currentDistance < distance || distance == null) {

            distance = currentDistance
            answer = element

        }

        if (currentDistance == distance && element > answer) {
            answer = element
        }

       

    })

    return answer;
};
