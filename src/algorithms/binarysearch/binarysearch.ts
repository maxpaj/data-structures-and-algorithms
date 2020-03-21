export function binarysearch<T extends number>(
    arr: T[],
    search: T,
    lo = 0,
    hi = arr.length - 1
): number {
    const index = Math.floor((hi + lo) / 2);
    if (search === arr[index]) {
        return index;
    } else if (search > arr[index]) {
        return binarysearch(arr, search, index, hi);
    } else {
        return binarysearch(arr, search, lo, index);
    }
}
