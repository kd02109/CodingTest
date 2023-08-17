function solution(k, dungeons) {
  let answer = 0;

  const visited = Array.from({ length: dungeons.length }, () => false);


  function dfs(hp, count) {

    for (let i = 0; i < dungeons.length; i++) {

      if (!visited[i] && dungeons[i][0] <= hp) {

        visited[i] = true;


        dfs(hp - dungeons[i][1], count + 1);

        visited[i] = false;
      }
    }

    answer = Math.max(answer, count);
  }

  dfs(k, 0);

  return answer;
}