# 다솔이의 월급 상자

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    answer = 0.0
    for _ in range(N):
        p, money = map(float, input().split())
        answer += p*money
    format_answer = "{:.6f}".format(answer)
    print(f'#{tc} {format_answer}')