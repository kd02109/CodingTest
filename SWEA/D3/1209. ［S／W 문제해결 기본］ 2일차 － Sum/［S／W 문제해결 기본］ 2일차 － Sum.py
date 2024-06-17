# Sum

for tc in range(1, 11):
    N = int(input())
    lst = [list(map(int, input().split())) for _ in range(100)]
    answer = []
    for i in range(len(lst)):
        row_sum = sum(lst[i][:])
        col_sum = 0
        answer.append(row_sum)
        for j in range(len(lst)):
            col_sum += lst[j][i]
        answer.append(col_sum)

    cross1_sum = 0
    cross2_sum = 0
    for i in range(len(lst)):
        cross1_sum += lst[i][i]
        cross2_sum += lst[i][99-i]
    answer.append(cross1_sum)
    answer.append(cross2_sum)
    print(f'#{tc} {max(answer)}')
