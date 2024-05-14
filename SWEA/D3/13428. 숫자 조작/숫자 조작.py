# 숫자 조작

T = int(input())

for tc in range(1,T+1):
    value = input()
    num = int(value)
    lst = list(value)
    min_num = num
    max_num = num
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            new_value = value[0:i] + value[j] + value[i+1:j] + value[i] + value[j+1:]
            if new_value[0] == "0":
                continue
            min_num = min(min_num, int(new_value))
            max_num = max(max_num, int(new_value))
    print(f'#{tc} {min_num} {max_num}')