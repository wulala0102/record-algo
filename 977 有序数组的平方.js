// 数组其实是有序的，只不过负数平方之后就可能成最大数
function sortedSquares(nums) {
    const n = nums.length;
    let k = n - 1;
    let i = 0;
    let j = n - 1;
    const res = new Array(n).fill(0);

    while( i<= j) {
        const left = nums[i] * nums[i];
        const right = nums[j] * nums[j];

        if (left > right) {
            res[k--] = left;
        } else {
            res[k--] = right;
        }
    }

    return res;
}