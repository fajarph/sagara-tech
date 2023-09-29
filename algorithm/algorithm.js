//Algorithm Test 1
function maxProductOfThree(nums) {
  nums.sort((a, b) => a - b)

  const n = nums.length

  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]

  const product2 = nums[0] * nums[1] * nums[n - 1]

  return Math.max(product1, product2)
}

// Test cases
console.log(maxProductOfThree([1, 2, 3])) // Output: 6
console.log(maxProductOfThree([-10, -10, 1, 3, 2])) // Output: 300


//Algorithm Test 2
function maxProfit(prices) {
  if (prices.length < 2) {
    return 0
  }

  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }

  return maxProfit
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])) // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])) // Output: 0
  
  