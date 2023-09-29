function walk(node: BinaryNode<number> | null, arr: number[]): void {
    if (node === null) {
        return;
    }

    walk(node.left, arr);
    walk(node.right, arr);
    arr.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];
    walk(head, arr);
    return arr;
}