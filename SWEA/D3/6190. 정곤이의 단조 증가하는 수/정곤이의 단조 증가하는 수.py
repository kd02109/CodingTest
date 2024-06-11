# 정곤이의 단조 증가하는 수
def check(value):
    is_true = True
    str_value = str(value)
    for i in range(1, len(str_value)):
        current = int(str_value[i])
        prev = int(str_value[i-1])
        if prev > current:
            is_true = False
            break
    return is_true


def combination(lst):
    com_set = set()
    for i in range(len(lst) - 1):
        for j in range(i+1, len(lst)):
            num = lst[i] * lst[j]
            if num not in com_set and check(num):
                com_set.add(num)
    return com_set


T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    lst = list(map(int, input().split()))
    answer = combination(lst)
    if not answer:
        print(f'#{tc} -1')
    else:
        print(f'#{tc} {max(answer)}')