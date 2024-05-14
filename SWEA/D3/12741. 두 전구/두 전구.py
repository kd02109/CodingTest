# 두 전구
T = int(input())
answer_set = []
for tc in range(1, T+1):
    start_A, end_A, start_B, end_B = map(int, input().split())
    max_s = max(start_A,end_A,start_B,end_B)
    lst_a = [0]*max_s
    answer = 0
    for i in range(start_A, end_A):
        lst_a[i] = 1

    for i in range(start_B,end_B):
        if lst_a[i] == 1:
            answer += 1
    answer_set.append(f"#{tc} {answer}")

print("\n".join(answer_set))