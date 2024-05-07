# 새로운 불면증 치료법
T = int(input())
for test in range(1, T+1):
    num = (int(input()))
    base = num
    lst = list(str(num))
    numSet = set(lst)
    while len(numSet) < 10:
        num += base
        lst = list(str(num))
        numSet = numSet.union(set(lst))
    print("#{} {}".format(test, num))