# 몫과 나머지 출력하기
T = int(input())

for count in range(1, T+1):
    a,b = map(int, input().split())
    print("#"+str(count), str(a//b), str(a%b))