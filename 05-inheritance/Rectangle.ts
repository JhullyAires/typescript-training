import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(theX: number, theY: number,
                private _widht: number,
                private _length: number) {

        super(theX, theY);
    }

    public get widht(): number {
        return this._widht;
    }
    public set widht(value: number) {
        this._widht = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._widht}, length=${this._length}`;
    }
}