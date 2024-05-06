# 숫자 배열 회전

T = int(input())

for test in range(1, T+1):
    print("#{}".format(test))
    size = int(input())
    arr = [list(map(int, input().split())) for _ in range(size)]

    # 90도 회전
    arr_90 = []
    for i in range(len(arr)):
        lst = []
        for j in range(len(arr)-1,-1,-1):
            lst.append(arr[j][i])
        arr_90.append(lst)

    # 180도 회전
    arr_180 = []
    for i in range(len(arr)-1,-1,-1):
        lst = []
        for j in range(len(arr)-1,-1,-1):
            lst.append(arr[i][j])
        arr_180.append(lst)

    # 270도 회전
    arr_270 = []
    for i in range(len(arr)-1,-1,-1):
        lst = []
        for j in range(len(arr)):
            lst.append(arr[j][i])
        arr_270.append(lst)

    for i in range(len(arr)):
        print(*arr_90[i], sep="", end=" ")
        print(*arr_180[i], sep="", end=" ")
        print(*arr_270[i], sep="")