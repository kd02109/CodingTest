# 통역사 성경이

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    incount, S = 0, ''
    while incount < N:
        income = input()
        incount += income.count('.') + income.count('!') + income.count('?')
        S += income
    start = 0
    answer = []
    for i in range(len(S)):
        if S[i] in ("?", "!", "."):
            lst = S[start:i].split()
            start = i+2
            cnt = 0
            for word in lst:
                if len(word) == 1 and word[0].isupper():
                    cnt += 1
                elif word[0].isupper() and word.isalpha() and word[1:].islower():
                    cnt += 1
            answer.append(cnt)
    print(f'#{tc}',*answer)