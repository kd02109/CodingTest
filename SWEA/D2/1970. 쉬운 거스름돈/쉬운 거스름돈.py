# 쉬운 거스름돈

T = int(input())
money_lst = [50000,10000,5000,1000,500,100,50,10]
for test in range(1, T + 1):
    total = int(input())
    print("#{}".format(test))
    for money in money_lst:
        answer = total // money
        total = total % money
        print(answer, end=" ")
    print()