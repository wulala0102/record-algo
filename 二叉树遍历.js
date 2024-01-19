// 迭代
function traversal(root) {
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
function traversal(root, res = []) {
    if (!root) {
        return res;
    }

    const stack = [root];
    let cur = null;

    
}
