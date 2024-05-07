# 수도 요금 경쟁
T = int(input())

for test in range(1, T+1):
    P, Q, R, S, W = map(int, input().split())
    A = P * W
    remain = 0
    if W > R:
        remain = W - R
    B = Q + remain * S

    if(A > B):
        print("#{} {}".format(test, B))
    else:
        print("#{} {}".format(test, A))