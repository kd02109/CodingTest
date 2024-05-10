# 무한 문자열

T = int(input())
for test in range(1,T+1):
    S, T = input().split()
    new_s = S * len(T)
    new_t = T * len(S)

    if new_s == new_t:
        print(f"#{test} yes")
    else:
        print(f"#{test} no")
