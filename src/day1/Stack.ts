type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
        }        

        const head = this.head;
        node.next = head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        if (this.length === 0) {
            this.head = undefined;
        }

        return head.value;       
}
    peek(): T | undefined {
        return this.head?.value;
}
}