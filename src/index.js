module.exports = function check(str, bracketsConfig) {
    const config = new Map(bracketsConfig);
    let stack = [];
    let arrayOfBrackets = str.split('');
    for (let item of arrayOfBrackets)
        if (config.get(stack[stack.length - 1]) === item)
            stack.pop();
        else stack.push(item);           

    return stack.length === 0;
}
