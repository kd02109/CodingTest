# Ladder1

N = 10
SIZE = 100

for tc in range(0,N):
    num = int(input())
    board = [list(map(int, input().split())) for _ in range(SIZE)]

    start=0
    x=y=0
    
    for i in range(100):
        if board[0][i] != 0:
            start = i
            x = 0
            y = i
            mark = str(x)+str(y)
            while x < 99:
                left_y = y - 1
                right_y = y + 1
                if 0 <= left_y < 100 and board[x][left_y] != 0 and board[x][left_y] != mark:
                    y = left_y
                    board[x][y] = mark
                elif 0 <= right_y < 100 and board[x][right_y] != 0 and board[x][right_y] != mark:
                    y = right_y
                    board[x][y] = mark
                else:
                    x += 1
                    if x<99:
                        board[x][y] = mark
        if board[x][y] == 2:
            print(f'#{num} {start}')
            break
