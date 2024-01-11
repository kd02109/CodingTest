function solution(bin1, bin2) {
 const num = Number.parseInt(bin1, 2)
 const num2 = Number.parseInt(bin2, 2)
 return (num+num2).toString(2)
}