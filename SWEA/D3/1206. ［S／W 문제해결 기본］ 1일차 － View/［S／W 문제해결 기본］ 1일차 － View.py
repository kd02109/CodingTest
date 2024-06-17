# VIEW


for tc in range(1, 10+1):
    N = int(input())
    lst = list(map(int, input().split()))
    answer = 0
    for i in range(2, N-2):
        base = lst[i]
        right = max(lst[i+1], lst[i+2])
        left = max(lst[i-1], lst[i-2])
        if base > right and base > left:
            answer += base - max(left, right)
    print(f'#{tc} {answer}')