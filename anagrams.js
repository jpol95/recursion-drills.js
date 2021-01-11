const anagrams = (input) => {
    if (input.length === 1) return [input];
    let resultArray = [];
    let inputArray = input.split("");
    for (let i = 0; i < inputArray.length; i++){
        const anagramResults = anagrams(spliceNoMutate(inputArray, i).join(""));
        for (let j = 0; j < anagramResults.length; j++){
            resultArray.push(inputArray[i] + anagramResults[j]);
        }
    }
    return resultArray;
}

const spliceNoMutate = (input, index) => {
    let result = [...input];
    result.splice(index, 1);
    return result; 
}

console.log(anagrams("subject"))