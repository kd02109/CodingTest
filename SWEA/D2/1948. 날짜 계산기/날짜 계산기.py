# 날짜 계산기
day_lst = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

T = int(input())
for test in range(1, T+1):
    month, day, month2, day2 = map(int, input().split())
    answer = 0
    for i in range(month, month2+1):
        total_day = day_lst[i]
        if i == month:
            answer += total_day - day
        elif i == month2:
            answer += day2
        else:
            answer += total_day
    print("#{} {}".format(test, answer+1))