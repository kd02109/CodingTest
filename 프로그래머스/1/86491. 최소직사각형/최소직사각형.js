function solution(sizes) {
    const max = Math.max(...sizes.flat());
    const minArr = sizes.map(size => Math.min(...size))
    const minMax = Math.max(...minArr)
    return max * minMax
}