const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(num) {
  const numStr = String(num);
  const helf = numStr.length / 2;
  let left = 0;
  let right = 0;
  for (let i = 0; i < helf; i++) {
    left += Number(numStr[i]);
    right += Number(numStr[i + helf]);
  }
  return left === right ? "LUCKY" : "READY";
}

console.log(solution(input) )