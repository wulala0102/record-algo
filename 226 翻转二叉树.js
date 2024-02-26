function invertTree(root) {
    if (root === null) {
        return;
    }

    const rightNode = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(rightNode);

    return root;
}