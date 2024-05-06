## 조교의 성적 매기기
import math

T = int(input())
score = {
    1: "A+",
    2: "A0",
    3: "A-",
    4: "B+",
    5: "B0",
    6: "B-",
    7: "C+",
    8: "C0",
    9: "C-",
    10: "D0"
}
for test_case in range(1, T+1):
    students, idx = map(int, input().split())
    lst = []
    for student in range(students):
        mid, final, work = map(int, input().split())
        total = mid * 0.35 + final * 0.45 + work * 0.2
        lst.append(total)
    lst_final = sorted(lst, reverse=True)
    key = lst_final.index(lst[idx-1])
    final_key = (key // (students // 10)) + 1
    print("#{} {}".format(test_case, score[final_key]))