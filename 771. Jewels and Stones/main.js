var numJewelsInStones = function (jewels, stones) {

    let jewelsObj = {}
    let answer = 0
    for (let i = 0; i < jewels.length; i++) {
        jewels[i] in jewelsObj ? jewelsObj[jewels[i]] = jewelsObj[jewels[i]] + 1 : jewelsObj[jewels[i]] = 1
    }

    for (let i = 0; i < stones.length; i++) {
        stones[i] in jewelsObj ? answer = answer+jewelsObj[stones[i]] : answer = answer
    }

    return answer

    // **********************


    // let stoneObj = {}
    // let answer = 0
    // for (let i = 0; i < stones.length; i++) {
    //     stones[i] in stoneObj ? stoneObj[stones[i]] = stoneObj[stones[i]] + 1 : stoneObj[stones[i]] = 1
    // }

    // for (let i = 0; i < jewels.length; i++) {
    //     jewels[i] in stoneObj ? answer = answer+stoneObj[jewels[i]] : answer = answer
    // }

    // return answer
};

// use hash table to store the jewels for O(1) lookup