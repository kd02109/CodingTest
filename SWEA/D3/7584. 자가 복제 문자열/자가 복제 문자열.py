# 자가 복제 문자열

T = int(input())

for tc in range(1, T+1):
    index = int(input())-1
    while index % 2 == 1:
        index = (index-1)//2
    if index % 4 == 0:
        print(f'#{tc} 0')
    else:
        print(f'#{tc} 1')