class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let parentIdx = Math.floor((array.length - 2) / 2);
    while (parentIdx >= 0) {
      this.siftDown(parentIdx, array);
      parentIdx -= 1;
    }
    return array;
  }

  siftDown(nodeIdx, array) {
    let idx = nodeIdx;

    while (idx * 2 + 1 < array.length) {
      let childOneIdx = idx * 2 + 1;
      let childTwoIdx = idx * 2 + 2;
      let smallerChild;

      if (childTwoIdx >= array.length) {
        smallerChild = childOneIdx;
      } else {
        smallerChild =
          array[childOneIdx] < array[childTwoIdx] ? childOneIdx : childTwoIdx;
      }
      if (array[smallerChild] < array[idx]) {
        this.swap(smallerChild, idx, array);
        idx = smallerChild;
      } else break;
      //break since we know it's in the right position.
    }
  }

  siftUp(nodeIdx) {
    let currentIdx = nodeIdx;
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (parentIdx >= 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swap(parentIdx, currentIdx, this.heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const popped = this.heap.pop();
    this.siftDown(0, this.heap);
    return popped;
  }

  insert(value) {
    this.heap.push(value);
    console.log('value', value);
    this.siftUp(this.heap.length - 1);
  }

  swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
