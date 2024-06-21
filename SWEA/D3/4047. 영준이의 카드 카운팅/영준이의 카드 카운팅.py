# 영준이의 카드 카운팅

T = int(input())

for tc in range(1, T+1):
    obj = {"S": 13, "D": 13, "H": 13, "C": 13}
    unique = {}

    value = input()

    is_error = False
    for i in range(0,len(value),3):
        card = value[i:i+3]
        if card in unique:
            is_error = True
            break
        else:
            unique[card] = True
            obj[card[0]] -= 1

    if is_error:
        print(f'#{tc} ERROR')
    else:
        print(f'#{tc} {obj["S"]} {obj["D"]} {obj["H"]} {obj["C"]}')