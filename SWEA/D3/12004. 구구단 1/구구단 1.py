# 구구단 1

def check(num:int):
    for i in range(1,10):
        if(num%i == 0) and (num/i <10):
            return "Yes"
    return "No"

T = int(input())
for test in range(1, T+1):
    num = int(input())
    answer = check(num)
    print(f'#{test} {answer}')