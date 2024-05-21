# Calkin-Wilf tree
import math

T = int(input())
for tc in range(1,T+1):
    lst = list(input())
    a, b = 1, 1
    for dir in lst:
        if(dir == "L"):
            b +=a
        if(dir == "R"):
            a +=b
    gcd = math.gcd(a,b)
    print(f'#{tc} {a//gcd} {b//gcd}')