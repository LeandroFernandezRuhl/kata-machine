function walk(node: BinaryNode<number> | null, arr: number[]): void {
    if (node === null) {
        return;
    }

    walk(node.left, arr);
    arr.push(node.value);
    walk(node.right, arr);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];
    walk(head, arr)
    return arr;
}