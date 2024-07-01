# 빙고
def check_value(value: int, lst: list):
    for i in range(len(lst)):
        for j in range(len(lst[i])):
            if lst[i][j] == value:
                lst[i][j] = "X"
                break


def cnt_bingo(lst: list):
    cnt = 0
    for x in range(len(lst)):
        if lst[x].count("X") == 5:
            cnt += 1
        col = 0
        for y in range(len(lst)):
            if lst[y][x] == "X":
                col += 1
        if col == 5:
            cnt += 1

    # 대각선 체크
    cnt_diagonal1 = cnt_diagonal2 = 0
    for k in range(len(lst)):
        if lst[k][k] == "X":
            cnt_diagonal1 += 1
        if lst[k][len(lst) - 1 - k] == "X":
            cnt_diagonal2 += 1

    if cnt_diagonal1 == 5:
        cnt += 1
    if cnt_diagonal2 == 5:
        cnt += 1
    return cnt


board = [list(map(int, input().split())) for _ in range(5)]
call = []
for i in range(5):
    call_lst = list(map(int, input().split()))
    call += call_lst

for i in range(len(call)):
    check_value(call[i], board)
    ans = cnt_bingo(board)
    if ans >= 3:
        print(i+1)
        break