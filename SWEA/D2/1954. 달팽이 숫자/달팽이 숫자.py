## 달팽이 숫자

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
T = int(input())

for test in range(1, T+1):
    N = int(input())
    ## turn 배열 만들기
    count = [N]
    lst = [[0]*N for _ in range(N)]
    num = 1
    x = 0
    y = 0
    turn = 0

    for i in range(N-1, 0, -1):
        count.append(i)
        count.append(i)

    for i in count:
        for dir in range(i):
            lst[x][y] = num
            num += 1
            if dir == i-1:
                if turn < len(dx)-1:
                    turn += 1
                else:
                    turn = 0
            x += dx[turn]
            y += dy[turn]
    ## 출력
    print("#{}".format(test))
    for arr in lst:
        print(*arr)