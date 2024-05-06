# 간단한 소인수 분해

T = int(input())
nums = [2, 3, 5, 7, 11]
for test in range(1, T+1):
    lst = [0, 0, 0, 0, 0]
    num = int(input())
    for i in range(len(nums)):
        quot = nums[i]
        count = 0
        while num % quot == 0:
            count += 1
            if num % quot == 0:
                num = num // quot
        lst[i] = count
    print("#{}".format(test), *lst)