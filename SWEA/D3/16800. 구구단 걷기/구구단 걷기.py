# 구구단 걷기
import math

def check(num):
    sqrt = int(math.sqrt(num))
    for i in range(sqrt+1, 1, -1):
        if num % i == 0:
            return [i, num//i]
    return [1, num]

T = int(input())
for test in range(1,T+1):
    num = int(input())
    A, B = check(num)
    print(f"#{test} {A-1 + B-1}")