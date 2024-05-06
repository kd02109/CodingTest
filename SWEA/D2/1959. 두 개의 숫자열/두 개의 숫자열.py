# 두 개의 숫자열
T = int(input())

for test in range(1, T + 1):
    N, M = map(int, input().split())
    lstN = list(map(int, input().split()))
    lstM = list(map(int, input().split()))
    lstMax = []
    lstMin = []
    min_len = min(len(lstM), len(lstN))
    max_len = max(len(lstM), len(lstN))
    if len(lstN) >= len(lstM):
        lstMax = lstN
        lstMin = lstM
    else:
        lstMax = lstM
        lstMin = lstN
    answer = -2 ** 32
    for i in range(max_len - min_len + 1):
        possible = 0
        for j in range(min_len):
            possible += lstMax[i+j] * lstMin[j]
        answer = max(answer, possible)
    print("#{} {}".format(test, answer))