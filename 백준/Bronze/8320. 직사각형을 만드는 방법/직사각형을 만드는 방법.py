N = int(input())

# [2] 몫 연산을 통해서 처리
ans = N
for i in range(2, N):
    n = N//i - (i-1)
    if n<1:
        break
    ans += n
print(ans)