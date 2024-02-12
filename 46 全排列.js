function permute(nums) {
    const res = [];
    const path = [];

    backtracking(nums, nums.length, []);

    return res;

    function backtracking(n, k, used) {
        // 先判断当前的路径是否为整个数组的长度
        if (path.length === k) {
            res.push(path);

            return;
        }

        for(let i = 0; i < k; i++) {
            if (used[i]) {
                continue;
            }

            path.push(nums[i]);
            used[i] = true;

            backtracking(n, k, used);

            path.pop();
            used[i] = false;
        }
    }
}