"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _widht, _length) {
        super(theX, theY);
        this._widht = _widht;
        this._length = _length;
    }
    calculateArea() {
        return this._widht * this._length;
    }
    get widht() {
        return this._widht;
    }
    set widht(value) {
        this._widht = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._widht}, length=${this._length}`;
    }
}
exports.Rectangle = Rectangle;
