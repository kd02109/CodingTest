def solution(board):
    # 열을 확인하기 위한 용도
    column = [0] * 8

    # 룩이 같은 열이나 같은 행에 있는지 확인
    for i in range(8):
        # 한줄에 여러개 있거나, 아무것도 없으면 안되는거
        if board[i].count('O') > 1 or board[i].count('O') == 0:
            return 'no'
        # 열을 검사하자.
        for j in range(0, 8):
            # 이미 같은 열에 룩이 있으면 안됨
            if board[i][j] == 'O' and column[j]:
                return 'no'
            # 같은 열에 룩이 없으니까 pass
            elif board[i][j] == 'O' and not column[j]:
                column[j] = 1
    return 'yes'


T = int(input())
for testcase in range(1, T + 1):
    # 크기는 8*8
    board = []
    for _ in range(8):
        board.append(input())
    answer = solution(board)

    print(f'#{testcase} {answer}')