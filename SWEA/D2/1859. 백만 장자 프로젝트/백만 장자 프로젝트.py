# 백만 장자 프로젝트

T = int(input())

for i in range(1, T+1):
    count = int(input())
    lst = list(map(int, input().split()))
    max_num = max(lst)
    buy_count = 0
    buy = 0
    sell = 0
    for j in range(0, count):
        if(lst[j] < max_num):
            buy += lst[j]
            buy_count += 1
        if(lst[j] == max_num):
            sell += max_num * buy_count - buy
            buy, buy_count = 0, 0
            if(j+1 < count):
                max_num = max(lst[j+1:])
    print("#{} {}".format(i, sell))