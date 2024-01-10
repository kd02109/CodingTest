function solution(spell, dic) {
    const spellSum = spell.sort().join('')
    const answer =  dic.filter(word => word.split('').sort().join('') === spellSum )
    return answer.length>=1 ? 1 : 2
}