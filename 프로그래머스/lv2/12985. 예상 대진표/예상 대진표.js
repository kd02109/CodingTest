function solution(n,a,b)
{
    let answer = 0
    let first = a;
    let second = b;
    while(first !== second){
        if(first%2===1){
            first=(first+1)/2
        }else{
            first = first/2
        }
        
        if(second%2 === 1){
            second = (second+1)/2
        }else{
            second = second/2
        }
        answer+=1
    }


    return answer;
}