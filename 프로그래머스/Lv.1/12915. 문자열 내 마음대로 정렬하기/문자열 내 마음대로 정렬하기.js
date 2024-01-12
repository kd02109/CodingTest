function solution(strings, n) {
    strings.sort((str1, str2) => {
        if (str1[n] === str2[n]) return str1>str2? 1: -1
        return str1[n] > str2[n]? 1 : -1
    })
    return strings
}