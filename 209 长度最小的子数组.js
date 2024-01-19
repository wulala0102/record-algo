// 找出数组中满足>=目标值的最短连续子数组
function minSubArrayLen(target, nums) {
    const len = nums.length;
    let start = 0;
    let end = 0;
    let sum = 0;
    let res = len + 1;

    while(end < len) {
        sum += nums[end++];

        while(sum >= target) {
            res = Math.min(res, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return res === len + 1 ? 0 : res;
}