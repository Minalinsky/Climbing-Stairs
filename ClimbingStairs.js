const fibonacci = (num, memo) => {
  memo = memo || {}
  // we are using memoization so we don't have to compute the same fibonacci numbers againçç
  if (memo[num]) return memo[num]
  if (num <= 1) return 1

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
}

const N = 20
const X = [1, 2]

const numberOfPossibilities = X.reduce((totalNumberOfPossibilities, numberOfSteps) => {
  return totalNumberOfPossibilities + fibonacci(N - numberOfSteps)
}, 0)

console.log(`This is the Total number of ways of climbing the stairs: ${numberOfPossibilities}`)

