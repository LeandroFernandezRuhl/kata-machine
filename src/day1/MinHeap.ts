export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0)
            return -1;
        this.length--;
        if (this.length === 0) {
            const deleted = this.data[0];
            this.data = [];
            return deleted;
        }
        const deleted = this.data[0];
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return deleted;
    }

    private heapifyDown(index: number): void {
        const lIndex = this.leftChild(index);
        const rIndex = this.rightChild(index);

        if (index >= this.length || lIndex >= this.length) {
            return;
        }

        const lValue = this.data[lIndex];
        const rValue = this.data[rIndex];
        const value = this.data[index];

        if (lValue > rValue && value > rValue) {
            this.data[index] = rValue;
            this.data[rIndex] = value;
            this.heapifyDown(rIndex);
        } else if (rValue > lValue && value > lValue) {
            this.data[index] = lValue;
            this.data[lIndex] = value;
            this.heapifyDown(lIndex);
        }
    }

    private heapifyUp(index: number): void {
        if (index === 0)
            return;

        const p = this.parent(index);
        const pValue = this.data[p];
        const v = this.data[index];

        if (pValue > v) {
            this.data[p] = v;
            this.data[index] = pValue;
            this.heapifyUp(p)
        }
    }

    private parent(index: number): number {
        return Math.floor((index - 1)/2);
    }

    private leftChild(index: number): number {
        return 2 * index + 1;
    }

    private rightChild(index: number): number {
        return 2 * index + 2;
    }
}