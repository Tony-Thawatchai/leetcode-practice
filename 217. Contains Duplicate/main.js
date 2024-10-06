var containsDuplicate = function (nums) {
    let numsObj = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numsObj) {
            return true
        } else {
            numsObj[nums[i]] = 1
        }
    }
    return false
};

// var containsDuplicate = function(nums) {
//     const seen = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (seen.has(nums[i])) {
//             return true;
//         }
//         seen.add(nums[i]);
//     }
//     return false;
// };

// Key Difference:
// - Object (in operator): While object lookups are generally fast, they can suffer from hash collisions, leading to degraded performance in some cases.
// - Set: Sets are specifically optimized for storing unique elements and performing quick lookups, making them more efficient for tasks like checking for duplicates.

// Summary:
// - First method (Object): O(n) on average, but could degrade to O(n²) due to collisions in the object hash table.
// - Second method (Set): O(n) consistently, as the Set is optimized for quick lookups and insertions, which is better suited for checking uniqueness. Hence, the second method has more stable and predictable time complexity.