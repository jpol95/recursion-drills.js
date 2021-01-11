const fib = (seq) => {
    if (seq === 1) return [1]
    if (seq === 2) return [1, 1]
    const fibArray = fib(seq - 1)
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    return fibArray
}

console.log(fib(13))
console.log(fib(7))
console.log(fib(5))
console.log(fib(2))
