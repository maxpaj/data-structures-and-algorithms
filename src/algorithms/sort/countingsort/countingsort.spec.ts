import { expect } from "chai";
import { countingsort } from "./countingsort";
import { is_sorted } from "../../is_sorted/is_sorted";

describe("countingsort", () => {
    const arrays = [
        { arr: [1, 0, 3, 1, 3, 1], base: 4 },
        { arr: [3, 7, 6, 1, 2, 3, 9], base: 10 },
        { arr: [3, 7, 10, 1, 2, 3, 9, 3, 7, 10, 1, 2, 3, 9], base: 11 },
    ];

    arrays.forEach(({ arr, base }) => {
        it("should sort an array correctly", () => {
            countingsort(arr, base);
            expect(is_sorted(arr)).to.equal(true);
        });
    });
});
