function solution(s) {
  const hash = {};

  return s.split("").map((item, index) => {
		// 객체에 해당 프로퍼티가 없다면 -1 있다면 index - value
    let result = hash[item] === undefined ? -1 : index - hash[item];
	 // 해당 철자와 인덱스를 프로퍼티로 저장.
    hash[item] = index;
    return result;
  });
}