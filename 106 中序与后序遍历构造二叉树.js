// 数组大小为空说明是空节点
// 取后序数组最后一个元素， 找到其在中序数组的位置，作为切割点
// 切割中序数组，分为中序左数组和中序右数组
// 切割后序数组，分为后序左数组和后序右数组
// 递归处理左数组和右数组
function buildTree(inorder, postorder) {
    if (!inorder.length) {
        return null;
    }

    // 找到切割点
    const rootVal = postorder.pop();
    const rootIndex = inorder.indexOf(rootVal);

    // 新建节点
    const root = new TreeNode(rootIndex);
    // 递归处理左子树
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex));

    return root;
}