# 팔씨름
T = int(input())

for tc in range(1,T+1):
    lst = list(input())
    x = lst.count("x")
    if 15 - x >= 8:
        print(f"#{tc} YES")
    else:
        print(f"#{tc} NO")