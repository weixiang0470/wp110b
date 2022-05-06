class vector{
    constructor(array) 
    {
        this.a=array;
    }
  
    length() {
        let ans=0;
        for(let i=0;i<this.a.length;i++){
            ans+=(this.a[i] * this.a[i]);
        }
        return Math.sqrt(ans);
    }
  
    neg() {
        let ans=[];
        for(let i in this.a){
            ans[i]=this.a[i] * -1;
           //this.a[i] *= -1;
        }
        //return new vector(`(${ans.toString()})`);
        return new vector(ans);
    }
  
    add(p2) {
        let ans=[];
        for(let i in this.a){
            ans[i]=this.a[i] + p2.a[i];
        }
        return new vector(ans);
    }
  
    sub(p2) {
        let ans=[];
        for(let i=0;i<this.a.length;i++){
            ans[i]=this.a[i] - p2.a[i];
        }
        return new vector(ans);
        //or
        // (this.add(p2.neg()));
    }
  
    dot(p2) {
        let ans=0;
        for(let i=0;i<this.a.length;i++){
            ans+=this.a[i] * p2.a[i];
        }
        return ans;
    }
  
    distance(p2) {
        let ans=0;
        for(let i in this.a){
            ans +=Math.pow((this.a[i] - p2.a[i]),2)
        }
        return Math.sqrt(ans);
        //or
        //return this.sub(p2).length();
    }
  
    toString() {
        let arr = this.a
        return `(${this.a.toString()})`;
    }
}
/*let v = new vector([1,2,3,4,5]);
let v1 = new vector([5,4,3,2,1]);
console.log(v.toString());
console.log(v.length());
console.log(v.neg());
console.log(v.add(v1).toString());*/

let p = new vector([2,3,7,5]), p2 = new vector([1,2,3,10])
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log(`p:${p}`);
console.log(`p2:${p2}`);
console.log('p.sub(p2)=', p.sub(p2))
console.log(`p:${p}`);
console.log(`p2:${p2}`);
console.log('p.dot(p2)=', p.dot(p2))
console.log(`p:${p}`);
console.log(`p2:${p2}`);
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log(`p:${p}`);
console.log(`p2:${p2}`);
console.log('p.distance(p2)=', p.distance(p2))
console.log(`p:${p}`);
console.log(`p2:${p2}`);