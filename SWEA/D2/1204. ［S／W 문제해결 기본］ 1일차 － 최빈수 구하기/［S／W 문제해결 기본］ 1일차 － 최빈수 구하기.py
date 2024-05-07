## 최빈수 구하기
T = int(input())

for test in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))
    lst_set = set(lst)
    obj = {}
    answer = 0
    for value in lst:
        if value in obj:
            obj[value] += 1
        else:
            obj[value] = 1

    lst_value = list(obj.values())
    max_num = max(lst_value)
    for value in lst_set:
        if obj[value] == max_num:
            answer = max(answer, value)
    print("#{} {}".format(test, answer))