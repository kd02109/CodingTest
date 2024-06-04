# 제곱수 만들기
import math

max_sqrt = int(math.sqrt(10 ** 7))
array = [True for _ in range(max_sqrt+1)]

for i in range(2, int(max_sqrt**0.5)+1):
    if array[i]:
        j = 2
        while i*j <= max_sqrt:
            array[i*j] = False
            j += 1

prime = []
for i in range(2, max_sqrt+1):
    if array[i]:
        prime.append(i)

T = int(input())
ans = []

for tc in range(1, T+1):
    num = int(input())
    answer = 1

    if num ** 0.5 != int(num ** 0.5):
        for p in prime:
            count = 0
            while num % p == 0:
                num //= p
                count += 1
            if count % 2 != 0:
                answer *= p
            if num == 1 or p > num:
                break
        if num > 1:
            answer *= num
    ans.append(f'#{tc} {answer}')

for answer in ans:
    print(answer)