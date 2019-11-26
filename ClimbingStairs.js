const testCases = require('./input')

const fibonacci = (num, memo) => {
  memo = memo || {}
  // we are using memoization so we don't have to compute the same fibonacci numbers againçç
  if (memo[num]) return memo[num]
  if (num <= 1) return 1

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
}

// running each test case:
testCases.forEach(testCase => {
  const X = testCase.X
  const N = testCase.N

  // this is the actual code for solving the problem
  const numberOfPossibilities = X.reduce((totalNumberOfPossibilities, numberOfSteps) => {
    if (numberOfSteps <= N) { // ignoring number greater than N
      return totalNumberOfPossibilities + fibonacci(N - numberOfSteps)
    } else return totalNumberOfPossibilities
  }, 0)
  
  console.log(`Number of possibilities for input X = ${X} and N = ${N}: `)
  console.log(`Total: ${numberOfPossibilities}`)
  console.log(``)
})
