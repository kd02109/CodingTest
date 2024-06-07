# 진용이네 주차 타워

def check_turn():
    for i in range(len(Idx_Of_Car)):
        if Idx_Of_Car[i] == -1:
            return i
    return 0

T = int(input())

for tc in range(1, T+1):
    # n: 주차 자리 개수 m: 이용할 차량 개수
    n, m = map(int, input().split())
    N = [int(input()) for _ in range(n)]
    M = [int(input()) for _ in range(m)]
    Turns = [int(input()) for _ in range(2*m)]
    Idx_Of_Car = [-1] * n
    answer = 0
    wait = []

    for value in Turns:
        if value >= 0:
            car_idx = value-1
            if -1 not in Idx_Of_Car:
                wait.append(car_idx)
            else:
                possible_park = Idx_Of_Car.index(-1)
                Idx_Of_Car[possible_park] = car_idx
                answer += N[possible_park] * M[car_idx]
        else:
            car_idx = abs(value)-1
            if wait:
                possible_park = Idx_Of_Car.index(car_idx)
                next_idx = wait.pop(0)
                Idx_Of_Car[possible_park] = next_idx
                answer += N[possible_park] * M[next_idx]
            else:
                possible_park = Idx_Of_Car.index(car_idx)
                Idx_Of_Car[possible_park] = -1
    print(f'#{tc} {answer}')