export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
    // head == null
    // head == needle
    // if needle < head.v recurse left
    // else recurse right
    if (!head)
        return false;
    if (head.value === needle)
        return true;
    if (needle < head.value)
        return dfs(head.left, needle);
    return dfs(head.right, needle);
}