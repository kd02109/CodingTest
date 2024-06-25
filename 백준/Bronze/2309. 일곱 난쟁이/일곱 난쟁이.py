# 일곱 난쟁이
lst = []
N = 9
for _ in range(N):
    num = int(input())
    lst.append(num)

lst.sort()
total = sum(lst)

value1 = 0
value2 = 0
for i in range(N-1):
    for j in range(i+1, N):
        if (total - lst[i] - lst[j]) == 100:
            value1 = lst[i]
            value2 = lst[j]
            break

for value in lst:
    if value != value2 and value != value1:
        print(value)
