# Ladder2

N = 10
SIZE = 100

for tc in range(0,N):
    num = int(input())
    board = [list(map(int, input().split())) for _ in range(SIZE)]

    start=0
    x=y=0

    ans = 100 * 100
    min_x = 100
    for i in range(100):
        if board[0][i] != 0:
            start = i
            x = 0
            y = i
            cnt = 0
            mark = str(x)+str(y)
            while x < 99:
                board[x][y] = mark
                left_y = y - 1
                right_y = y + 1
                cnt += 1
                if 0 <= left_y < 100 and board[x][left_y] != 0 and board[x][left_y] != mark:
                    y = left_y
                elif 0 <= right_y < 100 and board[x][right_y] != 0 and board[x][right_y] != mark:
                    y = right_y
                else:
                    x += 1

            if ans > cnt:
                ans = cnt
                min_x = start

    print(f'#{num} {min_x}')
