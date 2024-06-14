# 새샘이와 세 소수

# 모든 소수 찾기
lst = [True] * 1001
lst[0] = False
lst[1] = False
for i in range(2, len(lst)):
    if lst[i]:
        next_idx = 2
        while i * next_idx < len(lst):
            lst[i * next_idx] = False
            next_idx += 1

prime = []
for i in range(2, len(lst)):
    if lst[i]:
        prime.append(i)

T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    M = len(prime)
    answer = 0

    for i in range(M):
        if prime[i] > N:
            break
        for j in range(i, M):
            if prime[j] + prime[i] > N:
                break
            for z in range(j, M):
                if prime[i]+prime[j]+prime[z] > N:
                    break
                if prime[i]+prime[j]+prime[z] == N:
                    answer += 1

    print(f'#{tc} {answer}')
