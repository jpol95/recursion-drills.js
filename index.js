// const countingSheep = (numSheep) => {
//     if (numSheep === 0){
//         console.log("All sheep jumped over the fence")
//         return 
//     }
//     console.log(`${numSheep}: Another sheep jumps over the fence`)
//     countingSheep(numSheep - 1)
// }

// countingSheep(5)

// const powerCalculator = (num, exp) => {
//     if (exp === 1) return num
//     return num*powerCalculator(num, exp - 1)
// }

// console.log(powerCalculator(2,5))

// const reverseString = (input) => {
//     if (input.length === 1) return input
//     return input.charAt(input.length - 1) + reverseString(input.slice(0, input.length - 1))

// }

// console.log(reverseString("hello"))

// const triNum = (num) => {
//     if (num === 1) return num 
//     num += triNum(num - 1)
//     return num
// }

// console.log(triNum(4))

// const splitter = (input, sep) => {
//     let result = []
    
//     result = [...result, ]
// }

// const fib = (seq) => {
//     if (seq === 1 || seq === 2) return 1
//     return fib(seq - 1) + fib(seq - 2)
// }

// console.log(fib(5))

// const factorial = (input) => {
//     if (input === 1) return 1
//     return input*factorial(input - 1)
// }

// console.log(factorial(5))

const lookForC = (arrays) => {
    const coords = {}
    // console.log(arrays)
    for (let i = 0; i < arrays.length; i++){
        for (let j = 0; j < arrays[i].length; j++){
            if (arrays[i][j] === 'C') {
                coords.x = j;
                coords.y = i
            }
        }
    }
    // console.log(coords)
    if (coords.x === undefined){
        arrays[0][0] = 'C'
        coords.x = 0
        coords.y = 0
    }
    
    return coords
}

const checkSurrounding = (input, coords) => {
    const dirs = []
    const testCoords = [{x: coords.x, y: coords.y + 1, dir: 'D'}, 
        {x: coords.x, y: coords.y - 1, dir: 'U'}, 
        {x: coords.x + 1, y: coords.y, dir: 'R'}, 
        {x: coords.x - 1, y: coords.y, dir: 'L'}]

    for (let point of testCoords){
        if ( point.y < 0 || point.x < 0 || point.y >= input.length || point.x >= input[0].length || input[point.y][point.x] === '*' ){
            continue;
        }
        if (point.y === input.length - 1 && point.x === input[0].length - 1){
            point.dir += 'G'
        }
        dirs.push(point)
    }
    // console.log(dirs)
    return dirs
}

const paths = (arrays) => {
   let result = []
   let coords = lookForC(arrays)
//    console.log(coords)
   let dirs = checkSurrounding(arrays, coords)
   for (let i = 0; i < dirs.length; i++){
       let copy = [...arrays] 
       if (dirs[i].dir.includes('G')){
           result.push(dirs[i]);
           continue;
       }
       copy[dirs[i].y][dirs[i].x] = 'C'  
       copy[coords.y][coords.x] = '*'
       const specPath = paths(copy)
       copy[coords.y][coords.x] = copy[dirs[i].y][dirs[i].x] = ' ' 
       result = [...result, ...specPath]
       for (let j = 0; j < specPath.length; j++){
        // console.log(dirs)
        specPath[j].dir = dirs[i].dir + specPath[j].dir
       }       
   }
   return result;
}

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// let maze = [
//     [' ', '*', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', 'e']
// ];


console.log(paths(maze))

binary = (input) => {
    if (input === 0) return "0"
    let i;
    for (i = 0; i < 64; i++){
        if (Math.pow(2, i) >= input) break;
    }

}

binaryHelper = (input, digits) => {
    25
}

