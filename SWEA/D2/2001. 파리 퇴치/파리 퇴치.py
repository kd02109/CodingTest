T = int(input())
for test in range(1,T+1):
    size, box = map(int, input().split())
    lst = []
    answer = 0
    for i in range(0,size):
        row = list(map(int, input().split()))
        lst.append(row)

    for x in range(size-box+1):
        for y in range(size-box+1):
            box_possible = 0
            for box_x in range(box):
                for box_y in range(box):
                    box_possible += lst[x+box_x][y+box_y]
            answer = max(answer, box_possible)
    print("#{} {}".format(test, answer))