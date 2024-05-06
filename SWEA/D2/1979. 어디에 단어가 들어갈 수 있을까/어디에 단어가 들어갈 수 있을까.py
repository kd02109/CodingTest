## 어디에 단어가 들어갈 수 있을까?
import copy
T = int(input())





for test_case in range(1, T+1):
    M, N = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(M)]
    answer = 0
    for i in range(M):
        sum = 0
        # 가로
        for j in range(M):
            if arr[i][j] == 1:
                sum += 1
            if arr[i][j] == 0 or j == M-1:
                if sum == N:
                    answer += 1
                sum = 0

        # 세로
        for z in range(M):
            if arr[z][i] == 1:
                sum+=1
            if arr[z][i] == 0 or z == M-1:
                if sum == N:
                    answer += 1
                sum = 0
    print('#{} {}'.format(test_case, answer))
