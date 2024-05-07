T = int(input())
arr = [0,1,-1]
for test in range(1,T+1):
    SECONDS = int(input())
    v = 0
    total = 0
    for i in range(SECONDS):
        value = list(map(int, input().split()))
        if value[0] == 0:
            total += v
        else:
            N, M = value[0], value[1]
            v += arr[N] * M
            if v <= 0:
                v = 0
            total += v
    print("#{} {}".format(test, total))