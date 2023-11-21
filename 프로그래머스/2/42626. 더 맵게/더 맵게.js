class MinHeap {
  constructor() {
    // 안댁스를 맞추기 위해서 0은 빈 값으로 대체합니다. 1부터 값을 채웁니다.
    this.heap = [null];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.size() - 1;
    let parent = Math.floor(currentIdx / 2);

    // 부모 노드와 자식 노드 간의 크기 비교 이는 루트 값 까지 진행을 합니다.
    while (currentIdx > 1 && this.heap[currentIdx] < this.heap[parent]) {
      // 자식 노드의 값이 큰경우 부모 노드와 값을 변경
      [this.heap[currentIdx], this.heap[parent]] = [this.heap[parent], this.heap[currentIdx]];
      currentIdx = parent;
      parent = Math.floor(currentIdx / 2);
    }
  }

  // 값을 삭제 하면서 오름 차순으로 정렬해야 합니다.
  pop() {
    const min = this.heap[1];

    // 노드가 하나 뿐이라면 구현 끝, 아닐 경우 배열의 마지막 값을 첫 번째 값으로 가지고 옵니다.
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    // 부모 노드와 자식 노드 2개의 index 번호를 구합니다.
    let currentIdx = 1;
    let leftIdx = currentIdx * 2;
    let rightIdx = currentIdx * 2 + 1;

    // 왼쪽 자식 노드가 없다면, 자식 노드가 없다는 것을 의미합니다.
    if (!this.heap[leftIdx]) return min;

    // 오른쪽 자식이 없다면 왼쪽 자식하나만 있다는 것을 의미한다.
    // 이는 전체 이진 트리에서 서브 트리에 해당합니다.
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[currentIdx]) {
        [this.heap[leftIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[leftIdx]];
      }
      return min;
    }

    // currentIdx의 값이 leftIdx, rightIdx 값 보다 클 경우
    while (this.heap[currentIdx] > this.heap[leftIdx] || this.heap[currentIdx] > this.heap[rightIdx]) {
      // leftIdx와 rightIdx 값중에 최소 인덱스 값을 구합니다.
      const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      [this.heap[currentIdx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[currentIdx]];
      currentIdx = minIdx;
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }
    return min;
  }
}

function solution(scoville, K){
    let answer = 0;
    const minHeap = new MinHeap();
    
    for(let value of scoville){
        minHeap.push(value);
    }
    while(minHeap.size()>=3 && minHeap.heap[1] < K){
        let minValue = minHeap.pop()
        let nextMinValue = minHeap.pop()
        const mixedValue = minValue + nextMinValue*2;
        minHeap.push(mixedValue)
        answer += 1
    }
    if(minHeap.size()<= 2 && minHeap.heap[1] < K) return -1
    return answer;
}