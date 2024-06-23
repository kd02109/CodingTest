# 농작물 수확하기

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    lst = [list(input()) for _ in range(N)]
    cnt = 1
    middle = len(lst) // 2
    answer = 0
    for i in range(len(lst)):
        for j in range(middle, middle+cnt):
            answer += int(lst[i][j])

        if i < len(lst)//2:
            cnt += 2
            middle -= 1
        else:
            cnt -= 2
            middle += 1
    print(f'#{tc} {answer}')