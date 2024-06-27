# 직사각형을 만드는 방법

N = int(input())


ans = 0
for i in range(1,N+1):
    for j in range(1,i+1):
        if i*j <= N:
            ans += 1

print(ans)