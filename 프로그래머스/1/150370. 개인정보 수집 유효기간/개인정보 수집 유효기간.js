const MONTH = 28;
const YEAR = 12*MONTH;

function solution(today, terms, privacies) {
    const answer = []
    const termObj = {}
    
    const totalToday = calTotalDate(today);
    
    terms.forEach(term => {
        const [name, month] = term.split(' ');
        termObj[name] = Number(month) * MONTH;
    })
    
    privacies.forEach((privacy,idx) => {
        const [date, name] = privacy.split(' ');
        const totalPrivacyDate = calTotalDate(date)+termObj[name];
        if(totalPrivacyDate <= totalToday) answer.push(idx+1)
    })
    
    return answer
}

function calTotalDate(dates){
    const dateArr = dates.split('.').map(date=>Number(date));
    return (dateArr[0] * YEAR + dateArr[1] * MONTH + dateArr[2]);
}