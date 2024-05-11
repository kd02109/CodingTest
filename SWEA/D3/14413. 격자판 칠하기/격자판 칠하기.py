# 격자판 칠하기

def solution(board:list, row:int, col:int):
    # 0:#이 홀수, 1 :#이 짝수, 2:.이 홀수, 3:.이 짝수
    check = [0,0,0,0]
    for i in range(row):
        for j in range(col):
            if board[i][j] == "#":
                if (i+j) % 2 == 0:
                    check[1] = 1
                else:
                    check[0] = 1
            if board[i][j] == ".":
                if (i+j) % 2 == 0:
                    check[3] = 1
                else:
                    check[2] = 1
    if (check[0] and check[1]) or (check[0] and check[2]) or (check[1] and check[3]) or (check[2] and check[3]):
        return "impossible"
    else:
        return "possible"



T = int(input())
for test in range(1, T+1):
    N, M = map(int, input().split())
    board = [list(input()) for _ in range(N)]
    answer = solution(board, N, M)
    print(f"#{test} {answer}")
        