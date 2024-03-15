class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMax() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(curIdx, parent) {
    [this.heap[curIdx], this.heap[parent]] = [this.heap[parent], this.heap[curIdx]];
  }

  push(num) {
    this.heap.push(num);
    let curIdx = this.heap.length - 1;
    let parent = Math.floor(curIdx / 2);
    while (curIdx > 1 && this.heap[curIdx] > this.heap[parent]) {
      this.swap(curIdx, parent);
      curIdx = parent;
      parent = Math.floor(curIdx / 2);
    }
  }

  pop() {
    const max = this.heap[1];
      
    if (this.size() <= 2) {
      this.heap = [null];
    }else this.heap[1] = this.heap.pop();
      
    let parent = 1;
    let left = parent * 2;
    let right = parent * 2 + 1;

    while (this.heap[parent] < this.heap[left] || this.heap[parent] < this.heap[right]) {
      const maxIdx = this.heap[left] < this.heap[right] ? right : left;
      this.swap(maxIdx, parent);
      parent = maxIdx;
      left = parent * 2;
      right = parent * 2 + 1;
    }
    return max;
  }
}

function solution(n, k, enemy) {
    let answer = 0;
    const maxHeap = new MaxHeap();
    for(let i=0; i<enemy.length; i+=1){
        maxHeap.push(enemy[i]);
        n -= enemy[i]
        if(n < 0){
            if(k === 0 || n+maxHeap.getMax() < 0) return answer;
            k -=1;
            n += maxHeap.pop();
        }
        answer +=1;
    }
    return answer
}
