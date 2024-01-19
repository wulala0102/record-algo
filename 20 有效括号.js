// 给定包括三种括号的字符串，判断是否能有效闭合
function isValid(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [];

    for(const char of s) {
        if (char in map) {
            stack.push(char);
            continue;
        }

        if (map[stack.pop()] !== char) {
            return false;
        }
    }

    return !stack.length;
}