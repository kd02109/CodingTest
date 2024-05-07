# Base64 Devcoder
dic = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      '0','1','2','3','4','5','6','7','8','9','+','/' ]
T = int(input())

for test in range(1, T+1):
    word = list(input())
    value = ""
    for i in word:
        # idx 변수에 리스트 인덱스 값 할당
        idx = dic.index(i)

        # 2진수로 변환
        bin_num = str(bin(idx)[2:])

        # 6자리로 맞추기
        while len(bin_num) < 6:
            bin_num = "0" + bin_num
        value += bin_num
    result = ""
    for k in range(len(word)*6 // 8):
        # 10진수 변환
        number = int(value[k*8:k*8+8], 2)
        char = chr(number)
        result += char
    print("#{} {}".format(test, result))
