function solution(id_list, report, k) {
    const reports = [...new Set(report)]
    const countWarn = {}
    const applyWarn = {}
    id_list.forEach((id) => {
        countWarn[id] = 0;
        applyWarn[id] = 0;
    })
    
    reports.forEach(report => {
        const [, warn] = report.split(' ');
        countWarn[warn] += 1
    })
    
    reports.forEach(report => {
        const [apply, warn] = report.split(' ');
        if(countWarn[warn] >= k ){
            applyWarn[apply] += 1
        }
    })
    return id_list.map(id => applyWarn[id])
}