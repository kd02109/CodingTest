# 문자열의 거울상

T = int(input())
match = {
    "q": "p",
    "p": "q",
    "b": "d",
    "d": "b"
}
for tc in range(1, T+1):
    str = input()[::-1]
    answer = ""
    for char in str:
        answer += match[char]
    print(f'#{tc} {answer}')
