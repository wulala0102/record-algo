// 逐层遍历二叉树从左到右的所有节点
// 借助队列先进先出，符合一层一层遍历的逻辑
function leverOrder(root) {
    let queue = [];
    let res = [];
    queue.push(root);

    if (root === null) {
        return res;
    }

    while(queue.length !== 0) {
        // 记录当前层的节点数
        let curLen = queue.length;
        // 存放当前层的所有节点
        let curLevel = [];

        for (let i = 0; i < curLen; i++) {
            const node = queue.shift();
            curLevel.push(node.val);

            // 存放当前层的下一层节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        // 把每一层的节点结果放到数组
        res.push(curLevel);
    }

    return res;
}