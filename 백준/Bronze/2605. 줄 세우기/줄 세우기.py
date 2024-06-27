# 줄 세우기
N = int(input())
people = []
lst = list(map(int, input().split()))

for i in range(N):
    idx = i-lst[i]
    people.insert(idx, i+1)
print(*people)