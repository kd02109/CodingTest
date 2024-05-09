# 문자열 문자열

T = int(input())
def check(s):
    if len(s) % 2 == 1:
        return "No"
    half = len(s) // 2
    half_str = s[0:half]
    if half_str*2 == s:
        return "Yes"
    return "No"


for test in range(1, T+1):
    N = int(input())
    S = input()
    print(f"#{test} {check(S)}")
