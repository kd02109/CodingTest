function solution(nums) {
    const filter = [...new Set(nums)]
    return filter.length > (nums.length/2) ? (nums.length/2) : filter.length
}