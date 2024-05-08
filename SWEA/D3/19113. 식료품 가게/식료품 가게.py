# 식료품 가게
TC = int(input())

for tc in range(1, TC+1):
    num = int(input())
    lst = list(map(int, input().split()))
    sales = []
    while lst:
        for i in range(len(lst)):
            if lst[i] % 4 == 0 and int(lst[i]*0.75) in lst:
                origin_price = lst.pop(i)
                discount_idx = lst.index(int(origin_price * 0.75))
                discount = lst.pop(discount_idx)
                sales.append(discount)
                break
    
    print(f"#{tc}", *sales)