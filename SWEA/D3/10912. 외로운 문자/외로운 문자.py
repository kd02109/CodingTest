# 외로운 문자

T = int(input())

for tc in range(1, T+1):
    lst_str = list(input())
    idx = 0
    answer = ""
    while idx < len(lst_str):
        char = lst_str[idx]
        if char in lst_str[idx+1:]:
            lst_str.pop(idx)
            char_idx = lst_str.index(char)
            lst_str.pop(char_idx)
        else:
            answer += lst_str[idx]
            idx += 1
    if answer == "":
        print(f'#{tc} Good')
    else:
        print(f'#{tc} {"".join(sorted(answer))}')