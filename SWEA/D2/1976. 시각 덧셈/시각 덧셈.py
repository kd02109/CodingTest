## 시각 덧셈

T = int(input())

for test in range(1, T+1):
    hour1, min1, hour2, min2 = map(int, input().split())
    hour = hour1+hour2
    minuet = (min1 + min2)
    if minuet >= 60:
        minuet -= 60
        hour += 1
    if hour > 12:
        hour -= 12
    print("#{} {} {}".format(test, hour, minuet))