# 백만 장자 프로젝트

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))[::-1]
    max_value = 0
    answer = 0

    for value in lst:
        if value >= max_value:
            max_value = value
        else:
            answer += (max_value-value)
    print(f'#{tc} {answer}')


