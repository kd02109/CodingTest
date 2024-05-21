## 반반

T = int(input())

for tc in range(1,T+1):
    S = str(input())
    obj = {}
    for i in S:
        if i not in obj:
            obj[i] = 1
        else:
            obj[i] += 1

    obj_value = list(obj.values())
    if len(obj_value) == 2 and obj_value[0] == obj_value[1]:
        print(f'#{tc} Yes')
    else:
        print(f'#{tc} No')