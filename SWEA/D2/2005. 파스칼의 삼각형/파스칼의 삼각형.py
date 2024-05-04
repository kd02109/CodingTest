# 파스칼의 삼각형
T = int(input())


def makeTriangle(num):
    lst = [[1]]
    for i in range(1, num):
        parseList = []
        for j in range(0, i+1):
            if j==0 or j==i:
                parseList.append(1)
            else:
                parseList.append(lst[i-1][j-1] + lst[i-1][j])
        lst.append(parseList)
    return lst

for i in range(1, T+1):
    num = int(input())
    lst = makeTriangle(num)
    print(f"#{i}")
    for row in lst:
        print(' '.join(map(str,row)))