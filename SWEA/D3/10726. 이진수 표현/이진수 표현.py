## 이진수 표현

T = int(input())

for tc in range(1, T+1):
    N, M = map(int, input().split())
    bit = bin(M)[2:].zfill(N)
    bit_reverse = bit[::-1]
    is_on = True
    for i in range(0,N):
        if bit_reverse[i] == "0":
            is_on = False
            break
    if is_on:
        print(f'#{tc} ON')
    else:
        print(f'#{tc} OFF')