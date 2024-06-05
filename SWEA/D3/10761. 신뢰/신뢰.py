# 신뢰
def cal_time(robot, button):
    global b_time, o_time, b_location, o_location, time
    if robot == "B":
        if b_time == time:
            b_time += abs(b_location - button) + 1
            b_location = button
            time = b_time
        else:
            if time - b_time > abs(b_location - button):
                time += 1
                b_location = button
                b_time = time
            else:
                time += abs(b_location - button) - (time - b_time) + 1
                b_location = button
                b_time = time
    elif robot == "O":
        if o_time == time:
            o_time += abs(o_location - button) + 1
            o_location = button
            time = o_time
        else:
            if time - o_time > abs(o_location - button):
                time += 1
                o_location = button
                o_time = time
            else:
                time += abs(o_location - button) - (time - o_time) + 1
                o_location = button
                o_time = time


T = int(input())

for tc in range(1, T+1):
    lst = list(input().split())
    turns = lst[1:]
    b_location = 1
    o_location = 1
    b_time = 0
    o_time = 0
    time = 0
    for i in range(0, len(turns), 2):
        turn = turns[i]
        btn = int(turns[i+1])
        cal_time(turn, btn)
    print(f'#{tc} {time}')