function solution(m, n, board) {
    board = board.map(v => v.split(''));

    while (true) {
        let founded = [];

        // 찾기
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    founded.push([i, j]);
                }
            }
        }

        if (! founded.length) return [].concat(...board).filter(v => ! v).length;

        // 부수기
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        // 재정렬
        for (let i = m - 1; i > 0; i--) {
            // 해당 위치에 블록이 하나라도 있는지 확인
            if (!board[i].some(v => v===0)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}