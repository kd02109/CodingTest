# 숫자를 정렬하자
T = int(input())
for test in range(1, T+1):
    length = int(input())
    lst = sorted(list(map(int, input().split())))
    print("#{}".format(test), *lst)
