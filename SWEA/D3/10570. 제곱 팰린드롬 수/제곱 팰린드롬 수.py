# 제곱 팰린드롬 수

T = int(input())

for tc in range(1, T + 1):
    A, B = map(int, input().split())
    answer = 0
    for i in range(A, B + 1):
        if str(i) == str(i)[::-1] and i**0.5 == int(i**0.5):
            sqrt = int(i**0.5)
            if str(sqrt) == str(sqrt)[::-1]:
                answer += 1
    print(f'#{tc} {answer}')
