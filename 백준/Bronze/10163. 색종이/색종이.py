N = int(input())
arr = [[0]*1001 for _ in range(1001)]
for n in range(1, N+1):
    sj, si, w, h = map(int, input().split())
    for i in range(si, si+h):
        # 하나씩 표시하는 방법
        # for j in range(sj, sj+w):   # 해당 번호 색종이 숫자를 영역에 표시
        #     arr[i][j]=n
        # lst단위로 표시
        arr[i][sj:sj+w] = [n]*w

# [2] cnts: 빈도수 배열 사용해서, arr한 번만 순회
cnts = [0]*(N+1)
for lst in arr:
    for n in lst:
        cnts[n] += 1
print(*cnts[1:], sep='\n')

# # [1] 색종이 개수별로 전체 arr를 순회: 시간 오래걸림
# for n in range(1, N+1):
#     cnt = 0
#     for lst in arr:
#         cnt += lst.count(n)
#     print(cnt)