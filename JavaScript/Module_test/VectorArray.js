import { Vector } from "./Vector.js";

export class Vector_array extends Vector{
    constructor(array){
        super();
        this.c=array;
    }
    length(){
        let ans=0;
        for(let i in this.c){
            ans+=this.c[i]*this.c[i];
        }
        return Math.sqrt(ans);
    }

    neg(){
        let arr=[];
        for(let i in this.c){
            arr[i]=-this.c[i];
        }
        return new Vector_array(arr);
    }

    add(v2){
        let arr=[];
        for(let i in this.c){
            arr[i]=this.c[i] + v2.c[i];
        }
        return new Vector_array(arr);
    }

    dot(v2){
        let ans=0;
        for (let i in this.c){
            ans+=this.c[i]*v2.c[i];
        }
        return ans;
    }
    
    toString(){
        return JSON.stringify(this.c);
    }
}