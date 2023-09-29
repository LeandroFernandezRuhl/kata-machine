function walk(node: BinaryNode<number> | null, arr: number[]): void {
    if (node === null) {
        return;
    }

    arr.push(node.value);
    walk(node.left, arr);
    walk(node.right, arr);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];
    walk(head, arr);
    return arr;
}