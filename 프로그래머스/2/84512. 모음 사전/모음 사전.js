function solution(word) {
  const words = ['A', 'E', 'I', 'O', 'U'];
  const sets = [];
  function dfs(answer) {
    sets.push(answer);
    if (answer.length >= 5) return;
    for (let i = 0; i < words.length; i++) {
      dfs(answer + words[i]);
    }
  }
  dfs('');

  return sets.indexOf(word);
}
