
export default class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sum(delta) {
        this.x += delta.x;
        this.y += delta.y;
    }

    toTranslate() {
        return `translate(${this.x}px,${this.y}px)`;
    }

    excedes(coord, inf, sup) {
        if (this[coord] < inf) {
            this[coord] = inf;
            return true;
        }
        if (this[coord] > sup) {
            this[coord] = sup;
            return true;
        }
        return false;
    }

}