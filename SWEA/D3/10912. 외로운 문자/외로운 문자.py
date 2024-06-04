# 외로운 문자

T = int(input())

for tc in range(1, T+1):
    lst_str = list(input())
    obj = {}
    answer = ""
    for char in lst_str:
        if char in obj:
            obj[char] += 1
        else:
            obj[char] = 1
    for key in obj:
        if obj[key] % 2 != 0:
            answer += key
    if answer == "":
        print(f'#{tc} Good')
    else:
        print(f'#{tc} {"".join(sorted(answer))}')