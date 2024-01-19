// 层序遍历一个N叉树的从左到右所有节点
function levelOrder(root) {
    // 每一层可能有2个以上节点，故不再使用root.left root.right
    let queue = [];
    let res = [];

    queue.push(root);

    while(queue.length && root !== null) {
        const curLen = queue.length;
        const curLevel = [];

        while(curLen--) {
            const node = queue.shift();
            curLevel.push(node.val);

            for (let item of node.children) {
                item && queue.push(item);
            }
        }

        res.push(curLevel);
    }

    return res;
}