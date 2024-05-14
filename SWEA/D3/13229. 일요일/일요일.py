# 일요일

lst = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

T = int(input())
for tc in range(1, T+1):
    day = input()
    idx = lst.index(day)
    if idx == 6:
       print(f'#{tc} 7')
    else:
        print(f'#{tc} {6-idx}')