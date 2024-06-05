# 구독자 전쟁

T = int(input())

for tc in range(1, T+1):
    N, P, T = map(int, input().split())
    max_sub = min(P, T)
    min_sub = P+T-N
    if min_sub < 0:
        min_sub = 0
    print(f'#{tc} {max_sub} {min_sub}')
