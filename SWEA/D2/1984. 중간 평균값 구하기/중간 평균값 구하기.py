## 중간 평균값 구하기
T = int(input())
for test_case in range(1, T+1):
    lst = list(map(int, input().split()))
    lst_min = min(lst)
    lst_max = max(lst)
    total = 0
    count = 0
    for num in lst:
        if num != lst_max and num != lst_min:
            total += num
            count += 1

    medium = round(total/count)
    print("#{} {}".format(test_case, medium))