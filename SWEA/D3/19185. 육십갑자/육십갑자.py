# 육십갑자
T = int(input())
for test in range(1, T+1):
    N, M = map(int, input().split())
    lstN = list(input().split())
    lstM = list(input().split())
    Q = int(input())
    Q_lst = []
    for _ in range(Q):
        num = int(input())
        answer = lstN[(num-1) % N]+lstM[(num-1) % M]
        Q_lst.append(answer)
    print("#{}".format(test), *Q_lst)