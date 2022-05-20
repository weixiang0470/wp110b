import { Vector } from "./Vector.js";

export class Vector2D extends Vector{
    constructor(x,y){
        super();
        this.a =x;
        this.b = y;
    }

    length(){
        let [a1,b1]=[this.a,this.b];
        return Math.sqrt(a1*a1 + b1*b1);
    }

    neg(){
        let [a1,b1]=[this.a,this.b];
        return new Vector2D(-a1,-b1);
    }

    add(v2){
        let [a1,b1]=[this.a,this.b];
        return new Vector2D(a1+v2.a,b1+v2.b);
    }

    dot(v2){
        let [a1,b1]=[this.a,this.b];
        return a1*v2.a + b1*v2.b;
    }

    toString(){
        return `(${this.a},${this.b})`;
    }
}