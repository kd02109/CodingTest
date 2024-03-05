function solution(numbers) {
    numbers.sort((a,b)=> {
        const num = String(a) + String(b);
        const num2 = String(b) + String(a);
        return Number(num2) - Number(num)
    })
    if(numbers[0] === 0) return "0"
   return numbers.join('')
}
