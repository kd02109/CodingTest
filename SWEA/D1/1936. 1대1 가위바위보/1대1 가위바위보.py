# 1대1 가위바위보

a,b = map(int,(input().split()))

if a == 1 and b == 3:
    print("A")
if a == 2 and b == 1:
    print("A")
if a == 3 and b == 2:
    print("A")
if a == 3 and b == 1:
    print("B")
if a == 1 and b == 2:
    print("B")
if a == 2 and b == 3:
    print("B")