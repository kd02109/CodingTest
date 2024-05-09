#최대 조작 횟수
T = int(input())

for test in range(1, T+1):
    A, B = map(int, input().split())
    if A > B:
        print(f"#{test} -1")
        continue
    minus = B - A
    answer = 0
    if minus == 1:
        answer = -1
    elif minus % 2 == 1:
        answer = (minus-1)//2
    elif minus % 2 == 0:
        answer = minus // 2
    print(f"#{test} {answer}")