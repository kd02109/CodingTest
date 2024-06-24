# 수의 새로운 연산
dic = {}
cor = {}
x=y=1
for i in range(1,50000):
    cor[(x, y)] = i
    dic[i] = (x,y)
    x,y = x+1, y-1
    if y < 1:
        x, y = 1, x

T = int(input())

for tc in range(1, T+1):
    N, M = map(int, input().split())
    (nx,ny) = dic[N]
    (mx,my) = dic[M]
    print(f'#{tc} {cor[(nx+mx, ny+my)]}')
