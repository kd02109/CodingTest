function solution(priorities, location) {
  let base = priorities.map((prioryty, idx) => [prioryty, idx]);
  let count = 0;
  while (true) {
    const first = base[0];
    const others = base.slice(1);
    if (others.every((value) => value[0] <= first[0])) {
      count += 1;
      base = others;
      if (first[1] === location) break;
    } else {
      base = [...others, first];
    }
  }
  return count;
}