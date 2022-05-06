class vector{
    constructor(array) 
    {
        this.a=array;
        //console.log(this.a +'  ' + array);
    }
  
    length() {
        let ans=0;
        for(let i=0;i<this.a.length;i++){
            ans+=(this.a[i] * this.a[i]);
        }
        return Math.sqrt(ans);
    }
  
    neg() {
        //let ans=[];
        for(let i in this.a){
            //ans[i]=this.a[i] * -1;
            this.a[i] *= -1;}
        //return new vector(`(${ans.toString()})`);
        return new vector(this.a);
    }
  
    add(p2) {
        let ans=[];
        for(let i in this.a){
            ans[i]=this.a[i] + p2.a[i];
        }
        return new vector(ans);
    }
  
    sub(p2) {
        return (this.add(p2.neg()));
    }
  
    dot(p2) {
        let ans=0;
        for(let i=0;i<this.a.length;i++){
            ans+=this.a[i] * p2.a[i];
        }
        return ans;
    }
  
    distance(p2) {
        return this.sub(p2).length();
    }
  
    toString() {
        return `(${this.a.toString()})`;
    }
}
let p = new vector([2,3]), p2 = new vector([1,2])
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))