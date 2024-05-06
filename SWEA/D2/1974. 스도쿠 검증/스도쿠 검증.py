def is_valid(board):
    # 각 행에 대해 검증
    for row in board:
        if len(set(row)) != 9:
            return False

    # 각 열에 대해 검증
    for col in range(9):
        column = [board[row][col] for row in range(9)]
        if len(set(column)) != 9:
            return False

    # 3x3 작은 격자에 대해 검증
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            square = [board[x][y] for x in range(i, i + 3) for y in range(j, j + 3)]
            if len(set(square)) != 9:
                return False

    return True


# 테스트 케이스의 개수 입력
T = int(input())

for t in range(1, T + 1):
    # 스도쿠 퍼즐 입력
    puzzle = [list(map(int, input().split())) for _ in range(9)]

    # 결과 출력
    if is_valid(puzzle):
        print(f"#{t} 1")
    else:
        print(f"#{t} 0")
