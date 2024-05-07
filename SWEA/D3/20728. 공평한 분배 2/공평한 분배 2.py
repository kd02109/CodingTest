# 공평한 분배 2
T = int(input())

for test in range(1, T + 1):
    SIZE, PICK = map(int, input().split())
    lst = list(map(int, input().split()))
    lst.sort()
    answer = 2 ** 63
    for i in range(0, SIZE-PICK+1):
        possible = lst[i:i+PICK]
        min_possible = possible[0]
        max_possible = possible[-1]
        answer = min(max_possible-min_possible, answer)
    print("#{} {}".format(test, answer))