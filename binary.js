binary = (input) => {
    let digits = 0; 
    while (2**(digits + 1) < input){
        digits++;
    }
    return binaryHelper(input, digits)
}

binaryHelper = (input, digits) => {
    if (digits < 0) return ""
    if ((2**digits) <= input){
        return `1${binaryHelper(input - 2**digits, digits - 1)}`
    }
    else  return `0${binaryHelper(input, digits - 1)}`
}

console.log(binary(42))