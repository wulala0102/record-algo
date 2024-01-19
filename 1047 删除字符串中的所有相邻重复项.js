// 由小写字母组成的字符串， 会删除两个相邻且相同的字母
function removeDuplicates(s) {
    s = [...s];
    // 指向栈顶元素的下标
    let top = -1;

    for (let i = 0; i < s.length; i++) {
        if (top === -1 || s[top] !== s[i]) {
            // 入栈
            s[++top] = s[i];
        } else {
            // 推出栈
            top--;
        }
    }

    // 把字符串长度改为处理重复项目后的长度
    s.length = top + 1;
    return s.join('');
}