function walk(a: BinaryNode<number> | null | undefined, b: BinaryNode<number> | null | undefined): boolean {
    if (a?.value !== b?.value)
        return false;
    else if (!a && !b)
        return true;

    const resultLeft = walk(a?.left, b?.left);
    const resultRight = walk(a?.right, b?.right)
    return resultLeft && resultRight;
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return walk(a, b);
}