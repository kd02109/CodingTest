# 증가하는 사탕 수열
T = int(input())

for test in range(1, T+1):
    lst = list(map(int, input().split()))
    max_num = max(lst)
    min_num = min(lst)
    candy = 0

    while lst[1] >= lst[2]:
        lst[1] -= 1
        candy += 1

    while lst[0] >= lst[1]:
        lst[0] -= 1
        candy += 1

    if lst[0] == 0 or lst[1] == 0 or lst[2] ==0:
        print("#{} {}".format(test, -1))
    else:
        print("#{} {}".format(test, candy))