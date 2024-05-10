#원 안의 점
import math

T = int(input())

for test in range(1,T+1):
    R = int(input())
    check_num = R ** 2
    total = 0
    for i in range(R):
        total += int(math.sqrt(check_num - i**2))
    print(f"#{test} {total*4+1}")