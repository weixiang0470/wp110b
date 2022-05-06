//extend

class Vector{
    sub(v2){
        return this.add(v2.neg())
    }
    distance(v2){
        return this.sub(v2).length();
    }
}

class Vector2D extends Vector{
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

class Vector_array extends Vector{
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
let p = new Vector2D(2,3), p2 = new Vector2D(1,2)
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))

let p3 = new Vector_array([2,3]), p4 = new Vector_array([1,2])
console.log(p3)
console.log(p3.toString())
console.log(p3+'')
console.log('p.length()=', p3.length())
console.log('p.sub(p2)=', p3.sub(p4))
console.log('p.dot(p2)=', p3.dot(p4))
console.log('p.sub(p2).length()=', p3.sub(p4).length())
console.log('p.distance(p2)=', p3.distance(p4))
