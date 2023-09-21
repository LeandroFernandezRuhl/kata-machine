export default function bs_list(haystack: number[], needle: number): boolean {
let high: number = haystack.length;
let low: number = 0;
while (low < high) {
    let mid: number = Math.floor(low + (high - low) / 2);
    let current: number = haystack[mid];
    if (current === needle) {
        return true;
    } else if (needle < current) {
        high = mid;
    } else {
        low = mid + 1;
    }
}
return false;
}