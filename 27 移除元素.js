// 原地移除所有数值等于val的元素，返回移除后的数组长度
// 必须使用O（1）空间原地修改数组

// 双指针 快慢指针法
function removeElement(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k++] = nums[i];
        }
    }

    return k;
}