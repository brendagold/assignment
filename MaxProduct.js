// Given an array of integers, find the largest product yielded from three of the integers

let nums = [10, 3, 5, 6, 20]


const maxProduct = (nums) => {
    let n = nums.length
      // If size is less than 3, no triplet exists
      if (n < 3) {
        return "Array must contain at least 3 integers";
      }
      
     nums.sort((a,b) => a - b);
      
      let maxProduct1 = nums[0] * nums[1] * nums[n-1];
      let maxProduct2 = nums[n-1] * nums[n-2] * nums[n-3];
      return Math.max(maxProduct1, maxProduct2)
    
  }


console.log(maxProduct(nums))