# 삼성시의 버스 노선

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    board = [0]*5001
    for _ in range(N):
        A,B = map(int, input().split())
        for i in range(A, B+1):
            board[i] += 1

    P = int(input())
    c_list = [int(input()) for _ in range(P)]

    # 결과 출력
    print('#{}'.format(tc), end=' ')
    for i in c_list:
        print(board[i], end=' ')
    print()