function solution(skill, skill_trees) {
    let answer = 0;
    for(let skill_tree of skill_trees){
        let skillSet = [...skill]
        const skills = skill_tree.split('').reverse()
        while(skills.length){
            let char = skills.at(-1)
            if(skill.search(char) !== -1 && skillSet[0] === char){
                skillSet.shift()
                skills.pop()
            }
            else if(skill.search(char) === -1){
                skills.pop()
            }
            else{
                break;
            }
        }
        if(skills.length === 0) answer+=1
    }
    return answer;
}