# 팰린드롬
# 이미 단일 문자가 팰린드롬이라면 조합에 사용 불가능

def is_pellindrom(word):
    if word == word[::-1]:
        return True
    return False

T = int(input())
for test in range(1,T+1):
    N, M = map(int, input().split())
    lst = []
    result0 = 0
    result1 = 0
    for i in range(N):
        word = input()
        lst.append(word)
    for w in lst:
        if w[::-1] in lst and w != w[::-1]:
            result0 += M
        if w == w[::-1]:
            result1 = M
    print(f"#{test} {result0+result1}")