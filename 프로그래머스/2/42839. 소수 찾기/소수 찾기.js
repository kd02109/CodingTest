function isPrime(num) {
  num = Number(num);
  if (num <= 1) return false;

  let flag = true;
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

function solution(numbers) {
  numbers = numbers.split('');
  const answer = [];
  const visited = Array.from({ length: numbers.length }, () => 0);

  function dfs(layer, size, arr) {
    if (layer === size) {
      const num = Number(arr.join(''));
      if (isPrime(num)) answer.push(num);
      return;
    }
    for (let i = 0; i < numbers.length; i += 1) {
      if (!visited[i]) {
        visited[i] = 1;
        arr[layer] = numbers[i];
        dfs(layer + 1, size, arr);
        visited[i] = 0;
      }
    }
  }

  for (let i = 1; i <= numbers.length; i += 1) {
    const tmp = Array.from({ length: i }, () => 0);
    dfs(0, i, tmp);
  }

  const count = new Set(answer);
  return count.size;
}