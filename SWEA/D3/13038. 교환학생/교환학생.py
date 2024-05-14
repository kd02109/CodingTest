# 교환 학생

# (일, 월, 화, 수, 목, 금, 토, 일)

def cal_total_day(course, idx):
    answer = 1
    count = 1
    while answer != course:
        if idx < len(lst)-1:
            idx += 1
        else:
            idx = 0

        if lst[idx] == 1:
            answer += 1
        count += 1
    return count

T = int(input())
for tc in range(1, T+1):
    n = int(input())
    lst = list(map(int, input().split()))
    min_day = 2**63
    for i in range(len(lst)):
        if lst[i] == 1:
            min_day = min(cal_total_day(n,i), min_day)
    print(f'#{tc} {min_day}')