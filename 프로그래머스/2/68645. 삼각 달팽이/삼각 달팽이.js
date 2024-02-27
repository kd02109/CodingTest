function solution(n) {
  const dx = [1, 0, -1];
  const dy = [0, 1, -1];
  const map = Array.from({ length: n }, (_, idx) => new Array(idx + 1).fill(0));
  let number = 1;
  let dir = 0;
  let [x, y] = [-1, 0];
  for (let i = n; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      x += dx[dir];
      y += dy[dir];
      map[x][y] = number;
      number += 1;
    }
    dir = (dir + 1) % 3;
  }
  return map.flat();
}