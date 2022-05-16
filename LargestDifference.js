// Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element

const difference = (nums) => {
    let length = nums.length
    // using Kadane’s approach, i assumed that the initial different is the first two elements.
    let max_difference = nums[1] - nums[0]

    let min_element = nums[0]

    for(let i = 0; i < length; i++) {
        // iterating through the array and getting the max different 
        if (nums[i] - min_element > max_difference) {
            max_difference = nums[i] - min_element
        }
        // getting the value for the min_element
        if (nums[i] < min_element) {
            min_element = nums[i]
        }
    }
    return max_difference
    
}

let nums = [ 18,2,8,1,2,3,2,6]

console.log(difference(nums))