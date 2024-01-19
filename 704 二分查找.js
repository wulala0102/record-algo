// 力扣编号704， 二分查找
function binarySearch(nums, target) {
    // 左闭右闭
    const len = nums.length;
    let left = 0;
    let right = len - 1;

    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } {
            return mid;
        }
    }

    return -1;
}