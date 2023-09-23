export default function two_crystal_balls(breaks: boolean[]): number {
    const JUMP_AMOUNT = Math.floor(Math.sqrt(breaks.length));

    let i = JUMP_AMOUNT;
    for (; i < breaks.length; i += JUMP_AMOUNT) {
        if (breaks[i]) {
            break;
        }
    }

    i -= JUMP_AMOUNT;
    for (let j = 0; j <= JUMP_AMOUNT && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}