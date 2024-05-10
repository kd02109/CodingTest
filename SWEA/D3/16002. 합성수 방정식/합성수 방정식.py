# 합성수 방정식
import math

T = int(input())

for test in range(1,T+1):
    N = int(input())
    num1, num2 = N * 9, N * 8
    print("#{} {} {}".format(test, num1, num2))