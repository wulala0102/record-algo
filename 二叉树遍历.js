// 递归
function traversal(root) {
    // 采用闭包存储结果数组
    let res = [];

    const dfs = function(root) {
        if (root === null) {
            return;
        }

        /* 先序遍历 */
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
        /* 先序遍历 */

        /* 中序遍历 */
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
        /* 中序遍历 */

        /* 后序遍历 */
        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
        /* 后序遍历 */
    };

    dfs(root);

    return res;
}

// 迭代
// 适用于前中后序遍历的统一迭代法
// 如果使用栈的话，没法识别「访问节点」和「待处理节点」
// 可以采用标记法
// 将「访问节点」放入栈中，将「待处理节点」也放入栈中但在其后添加一个空节点
// 这样只有空节点弹出的时候，才将下一个节点放入结果集
// 由于栈是先进后出，所以对应的前序遍历入栈顺序是右左中
function traversal(root, res = []) {
    if (!root) {
        return res;
    }

    // 采用栈的数据结构
    const stack = [root];
    let cur = null;

    while(stack.length) {
        const node = stack.pop();
        
        if (!node) {
            res.push(stack.pop().val);
            
            continue;
        }

        // 右
        node.right && stack.push(node.right);
        // 左
        node.left && stack.push(node.left);
        // 中
        stack.push();
    }
}
