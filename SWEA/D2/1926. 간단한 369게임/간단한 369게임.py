# 간단한 369게임

T = int(input())
answer = ""
for i in range(1, T+1):
    num = str(i)
    length = len(num)
    check = 0
    for j in range(0, length):
        if num[j] == "3" or num[j] == "6" or num[j] == "9":
            check += 1
    if(check == 0):
        print(num, end=" ")
    else:
        print("-"*check, end=" ")