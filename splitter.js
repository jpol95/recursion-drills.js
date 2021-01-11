const splitter = (input, sep) => {
    if (!input.includes(sep)) return [input];
    let index = input.indexOf(sep)
    return [input.slice(0, index), ...splitter(input.slice(index + 1), sep)]
}

console.log(splitter("Hello my name is Jesse and I like cheese", " "))