# 간단한 압축 풀기

T = int(input())

for test in range(1,T+1):
    S = int(input())
    answer = ""
    for i in range(S):
        Char, Count = input().split()
        answer += Char * int(Count)
    print("#{}".format(test))
    for i in range(0, len(answer), 10):
        print(answer[i:i+10])
