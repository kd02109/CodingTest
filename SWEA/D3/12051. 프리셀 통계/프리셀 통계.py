# 프리셀 통계

"""
G : 지금까지 총 게임 수
D : 오늘 한 게임 수
N : 최대 오늘 한 게임 예측
"""

T = int(input())
for tc in range(1, T+1):
    N, D, G = map(int, input().split())
    if G == 100 and D != 100:
        print(f"#{tc} Broken")
    elif G == 0 and D != 0:
        print(f"#{tc} Broken")
    else:
        check=0
        for i in range(1, N+1):
            if(D*i/100) == (D*i//100):
                check = 1
                break
        if check == 1:
            print(f"#{tc} Possible")
        else:
            print(f"#{tc} Broken")
