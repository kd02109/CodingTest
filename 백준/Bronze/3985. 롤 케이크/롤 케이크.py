# 롤 케이크

T = int(input())
cake = [0] * (T+1)

N = int(input())
max_value_before = max_value_end =  0
before=end=0
obj = {}

for tc in range(1, N+1):
    s,e = map(int, input().split())
    if e-s > max_value_before:
        max_value_before = e-s
        before = tc

    for i in range(s,e+1):
        if cake[i] == 0:
            cake[i] = tc
            if tc in obj:
                obj[tc] += 1
            else:
                obj[tc] = 1

for (key, value) in obj.items():
    if value > max_value_end:
        max_value_end = value
        end = key
print(before)
print(end)