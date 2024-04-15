class MinHeap {
    arr = [null];
    
    isEmpty() {
        return this.arr.length === 1;
    }
    
    getLen(){
        return this.arr.length-1;
    }
    
    swap(node, node2){
        [this.arr[node], this.arr[node2]] = [this.arr[node2], this.arr[node]]
    }
    
    push(val){
        this.arr.push(val);
        let curIdx = this.getLen();
        let parentIdx = Math.floor(curIdx/2);
        
        while(parentIdx !== 0 && this.arr[curIdx] < this.arr[parentIdx]){
            this.swap(curIdx, parentIdx)
            curIdx = parentIdx;
            parentIdx = Math.floor(curIdx/2);
        }
    }
    
    pop(isMin){
        // 값이 없는 경우
        if(this.isEmpty()){
            this.arr = [null];
            return;
        }
        // 값이 1개 있는 경우
        if(this.getLen() === 1){
            return this.arr.pop();
        }
        // 최대값을 삭제 하는 경우
        if(!isMin){
            let curIdx = this.getLen();
            let parentIdx = Math.floor(curIdx/2);
            const lastLeafs = this.arr.slice(parentIdx)
            const max = Math.max(...lastLeafs)
            this.swap(parentIdx + lastLeafs.indexOf(max), curIdx);
            return this.arr.pop();
        }
        
        // 최솟 값 삭제하기 
        const min = this.arr[1];
        this.arr[1] = this.arr.pop();
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        while (
            this.arr[leftIndex] && this.arr[currentIndex] > this.arr[leftIndex] ||
            this.arr[rightIndex] && this.arr[currentIndex] > this.arr[rightIndex] 
        ) {
            if (this.arr[leftIndex] === undefined) {
                this.swap(rightIndex, currentIndex);
            } else if (this.arr[rightIndex] === undefined) {
                this.swap(leftIndex, currentIndex);
            } else if (this.arr[leftIndex] > this.arr[rightIndex]) {
                this.swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else if (this.arr[leftIndex] <= this.arr[rightIndex]) {
                this.swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }
            
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return min;
    }
    result(){
        if(this.isEmpty()) return [0,0];
        if(this.getLen() === 1) return [this.arr[1], this.arr[1]];
        const curIdx = this.getLen();
        const parentIdx = Math.floor(curIdx/2);
        const lastLeafs = this.arr.slice(parentIdx);
        const max = Math.max(...lastLeafs);
        return [max, this.arr[1]];
    }
}

function solution(operations) {
    const min = new MinHeap()
    operations.forEach(value=> {
        const [str, num] = value.split(" ").map((item, idx)=> idx=== 1 ? Number(item) : item);
        if(str === "I"){
            min.push(num)
        }else{
            if(num === -1) min.pop(true);
            else min.pop(false);
        }
    })

    return min.result()
}