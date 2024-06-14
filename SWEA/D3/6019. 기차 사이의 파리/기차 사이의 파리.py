# 기차 사이의 파리
T = int(input())

for tc in range(1, T + 1):
    D, A, B, F = map(float, input().split())
    second = D/(A+B)
    total = second * F

    print(f'#{tc} {total:.10f}')