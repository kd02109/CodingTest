# 1차원 정원

T = int(input())
for test in range(1, T+1):
    N, M = map(int, input().split())
    possible = M + M + 1
    if possible >= N:
        print(f"#{test} 1")
    else:
        answer = N//possible
        if N % possible != 0:
            answer += 1
        print(f"#{test} {answer}")