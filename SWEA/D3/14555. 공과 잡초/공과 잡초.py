#공과 잡초
T = int(input())
for test in range(1,T+1):
    lst = list(input())
    stack = []
    total = 0;
    for value in lst:
        if value == "(":
            stack.append(value)
        if value == "|" and stack and stack[-1] == "(":
            stack.pop()
            total += 1
        if value == ")":
            total += 1
            if stack:
                stack.pop()
    print(f"#{test} {total}")