# 오목 판정

def solution(x: int, y: int):
    global lst, N
    row_check = 1
    col_check = 1
    diagonal_check = 1
    diagonal_check_back = 1
    if N - x >= 5:
        for i in range(1, 5):
            if lst[i + x][y] == "o":
                col_check += 1

    if N - y >= 5:
        for i in range(1, 5):
            if lst[x][i + y] == "o":
                row_check += 1

    if N - x >= 5 and N - y >= 5:
        for i in range(1, 5):
            if lst[x + i][y + i] == "o":
                diagonal_check += 1

    if x >=4 and y <= N-5:
        for i in range(1,5):
            if lst[x-i][y+i] == "o":
                diagonal_check_back += 1

    if row_check == 5 or col_check == 5 or diagonal_check == 5 or diagonal_check_back == 5:
        return "YES"
    return "NO"


T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    lst = [list(input()) for _ in range(N)]
    answer = "NO"
    for i in range(N):
        for j in range(N):
            if lst[i][j] == "o":
                answer = solution(i, j)
            if answer == "YES":
                break

        if answer == "YES":
            break
    print(f'#{tc} {answer}')
