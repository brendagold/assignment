// Removing duplicates of an array and returning an array of only unique elements

// first approach was to use javascript array methods to get the solution
// such as nums.filter((item, index) => nums.indexOf(item) === index)

// Second approach is using two loops to create a new array of unique elements but it is not efficient 
// because its time complexity is O(n^2) 

// Let me solve the question using hashmap, its time complexity is O(n) and space complexity is O(n)
// here our key will be the number and our value will be true or false. 

let nums = [1,6, 8, 6,9, 7, 9, 3,2,3,2,4,1,5,]

const removeDuplicates = (nums) => {
    
    let uniqueArr = []
    let hashMap = {}
    for(let i =0; i < nums.length; i++) {
        // if the element exists in the hashmap, continue to the next i
        if (hashMap[nums[i]]) {
            continue
        } else {
            //else add it to the array of unique values and set its value in the hashmap as true.
            uniqueArr.push(nums[i])
            hashMap[nums[i]] = true
        }
    }
     return uniqueArr
}

console.log(removeDuplicates(nums))