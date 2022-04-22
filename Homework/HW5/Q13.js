class Ratio{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    tostring(){
        return this.x +'/'+ this.y;
    }
    add(r){
        this.x=this.x*r.y+r.x*this.y;
        this.y= this.y*r.y;
        return new Ratio(this.x,this.y);
    }
    sub(r){
        this.x=this.x*r.y - r.x*this.y;
        this.y=this.y*r.y;
        return new Ratio(this.x,this.y);
    }
    mul(r){
        this.x = this.x*r.x;
        this.y = this.y*r.y;
        return new Ratio(this.x,this.y);
    }
    div(r){
        this.x = this.x*r.y;
        this.y = this.y*r.x;
        return new Ratio(this.x,this.y);
    }
}
var r1 = new Ratio(1,3);
var r2 = new Ratio(2,4); 
var r3 = r1.mul(r2); 
r1 = new Ratio(1,3);
var r4 = r1.div(r2);
console.log('(1/3 * 2/4) = '+r3.tostring());
console.log('(1/3) / (2/4) = '+r4.tostring());