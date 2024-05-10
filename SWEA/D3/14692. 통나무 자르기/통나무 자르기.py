# 통나무 자르기
T = int(input())
for test in range(1, T+1):
    num = int(input())
    if num % 2 ==0:
        print(f"#{test} Alice")
    else:
        print(f"#{test} Bob")