// Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time

let nums = [5, 3, 2,4, 1,6];

// If i can get the sum of all the number between the bounds,
// then I subtract it from the sum of numbers in the given array,
// that is the solution to my problem

// To get the sum of all the number, i will be using Gauss Sum Formula for consecutive integers
// Which is [(U * (U + 1)) / 2] - [(L * (L - 1)) / 2];
// Where U is the upper bound and L is the lower bound

const findNumber = (nums, upper, lower) => {
  // Get the sum of integers in the array
  let sumOfNumbers = 0;
  for (let i = 0; i < nums.length; i++) {
    sumOfNumbers += nums[i];
  }
// Get the sum of the nubers between the bounds
  let upperBoundSum = (upper * (upper + 1)) / 2;
  let lowerBoundSum = (lower * (lower - 1)) / 2;
  
  let boundSum = upperBoundSum - lowerBoundSum;
// Subtract the sum of the given array from the sum of the bound
  return boundSum - sumOfNumbers
};


console.log(findNumber(nums, 7,1))