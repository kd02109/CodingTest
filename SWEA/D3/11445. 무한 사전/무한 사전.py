# 무한 사전

T = int(input())
for tc in range(1, T+1):
    P = input().rstrip()
    Q = input().rstrip()

    if P+"a" == Q:
        print(f'#{tc} N')
    else:
        print(f'#{tc} Y')