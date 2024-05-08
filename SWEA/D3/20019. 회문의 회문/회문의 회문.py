# 회문의 회문
T = int(input())


def check_string(s):
    half = len(s) // 2
    for i in range(0, half+1):
        if s[i] != s[-1*i-1]:
            return False
    return True

for test in range(1, T+1):
    S = list(input())
    half = len(S)//2
    string_start = S[0: half]
    string_end = S[half+1:]

    if check_string(S) and check_string(string_end) and check_string(string_start):
        print("#{} YES".format(test, ))
    else:
        print("#{} NO".format(test, ))