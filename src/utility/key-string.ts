import { Key } from "../hashtable/hashtable";

export class KeyString implements Key<KeyString> {
    private str: string;

    constructor(str: string) {
        this.str = str;
    }

    equals(s: KeyString): boolean {
        return s.str === this.str;
    }

    hashCode(): number {
        return this.str.split("").reduce((sum, curr) => sum + curr.charCodeAt(0), 0);
    }
}