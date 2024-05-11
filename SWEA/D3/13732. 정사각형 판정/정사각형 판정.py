# 정사각형 판정

def solution(board:list):
    lst = []
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] == "#":
                lst.append([i,j])
    total = len(lst)
    lst_x = [lst[x][0] for x in range(len(lst))]
    lst_y = [lst[x][1] for x in range(len(lst))]
    min_x = min(lst_x)
    max_x = max(lst_x)
    min_y = min(lst_y)
    max_y = max(lst_y)
    x = max_x - min_x + 1
    y = max_y - min_y + 1
    if x == y and x*y == total:
        return "yes"
    else:
        return "no"


T = int(input())
for test in range(1, T+1):
    N = int(input())
    arr = [list(input()) for _ in range(N)]
    answer = solution(arr)
    print(f"#{test} {answer}")