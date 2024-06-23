def is_pal(arr, leng):
    for lst in arr:
        for i in range(N-leng+1):       # 모든 시작지점
            if lst[i:i+leng] == lst[i:i+leng][::-1]:
                return True
    return False

def is_pal_idx(arr, leng):
    for lst in arr:
        for i in range(N-leng+1):       # 모든 시작지점
            for j in range(leng//2):    # 몇 개를 검사
                if lst[i+j]!=lst[i+leng-1-j]:
                    break   # 다음 시작위치로...
            else:           # break 안 한 경우 else로
                return True
    return False

T = 10
for test_case in range(1, T + 1):
    _ = input() # TC 번호 사용하지 않음
    N = 100     # 문제에서 주어진 값으로 설정
    arr1 = [input() for _ in range(N)]
    # arr2 = list(zip(*arr1))                 # tuple
    arr2 = [''.join(x) for x in zip(*arr1)] # string

    for leng in range(N, 1, -1):    # 찾으면 최대값
         # if is_pal(arr1, leng) or is_pal(arr2, leng):
         if is_pal_idx(arr1, leng) or is_pal_idx(arr2, leng):
             break
    print(f'#{_} {leng}')