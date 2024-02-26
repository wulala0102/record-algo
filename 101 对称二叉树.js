// 对称二叉树要比较的不是左右两个节点， 而是比较左子树和右子树
// 需要通过递归函数的返回值判断两个子树的内侧节点和外侧节点是否相等，只能采用后序遍历
function isSymmetric(root) {
    if (root === null) {
        return true;
    }

    return compareNode(root.left, root.right);

    function compareNode(left, right) {
        if (left === null && right === null) {
            return true;
        }
        if ((left === null && right !== null) || (left !== null && right === null)) {
            return false;
        }
        if (left.val !== right.val) {
            return false;
        }

        // 确定单层递归逻辑
        const outside = compareNode(left.left, right.right);
        const inside = compareNode(left.right, right.left);

        return outside && inside;
    }
}