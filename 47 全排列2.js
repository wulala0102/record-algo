function permuteUnique(nums) {
    const res = [];
    const path = [];
    const len = nums.length;

    // 排序会方便通过相邻的节点来判断是否重复使用了
    nums.sort((a, b) => a - b);

    backtracking([]);

    return res;

    function backtracking(used) {
        if (used.length === nums.length) {
            res.push(path);

            return;
        }

        for (let i = 0; i < k; i++) {
            if (i > 0 && !used[i - 1] && nums[i] === nums[i - 1]) {
                continue;
            }

            if (!used[i]) {
                path.push(nums[i]);
                used[i] = true;

                backtracking(used);

                path.pop();
                used[i] = false;
            }
        }
    }
}