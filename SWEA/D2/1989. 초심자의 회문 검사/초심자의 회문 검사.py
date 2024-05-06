# 초심자의 회문 검사
T = int(input())

for test in range(1, T+1):
    text = input()
    reverse_lst = list(text)
    reverse_lst.reverse()
    reverse_text = "".join(reverse_lst)
    isReverse = True
    for i in range(len(text)):
        if text[i] != reverse_text[i]:
            isReverse = False
            break
    if(isReverse):
        print("#{} {}".format(test, 1))
    else:
        print("#{} {}".format(test, 0))