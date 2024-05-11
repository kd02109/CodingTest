# 숫자가 같은 배수
def solution(value: int, lst: list):
    for i in range(2, 10):
        next_value = value * i
        next_sort = sorted(str(next_value))
        if "".join(lst) == "".join(next_sort):
            return "possible"
    return "impossible"


T = int(input())
for test in range(1, T+1):
    num = int(input())
    sort_str = sorted(str(num))
    answer = solution(num, sort_str)
    print(f"#{test} {answer}")
