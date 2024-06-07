# 민정이와 광직이의 알파벳 공부

def check_alpha(string): # 소문자 26개가 다 있으면 True 리턴

    answer = "abcdefghijklmnopqrstuvwxyz"
    string = list(set(string))

    check = 0
    for st_ in string:
        if st_ in answer:
            check += 1

    if check == 26:
        return True
    return False


def dfs(answer, idx):
    global words, cnt
    if check_alpha(answer):
        cnt += 1

    if idx == len(words):
        return

    for i in range(idx, len(words)):
        dfs(answer + words[i], i + 1)



T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    words = [input() for _ in range(N)]
    cnt = 0
    dfs("", 0)
    print(f'#{tc} {cnt}')
