class Ratio{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    tostring(){
        if (this.y==1)return this.x;
        else return this.x +'/'+ this.y;
    }
    reduce(){
        var min;
        if (this.x>this.y)min=this.y;
        else min=this.x;
        for(var i=2;i<=min;i++){
            //console.log('i:'+i+' y:'+this.y);
            if (this.x%i==0 && this.y%i ==0){
                this.x/=i;
                this.y/=i;
                i=1;
            }
        }
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
r1 = new Ratio(1,3);
var r6 = r1.add(r2);
r1 = new Ratio(1,3);
var r7 = r1.sub(r2);
r3.reduce();
r4.reduce();
r6.reduce();
r7.reduce();
console.log('(1/3 + 2/4)='+r6.tostring());
console.log('((1/3) - (2/4))='+r7.tostring());
console.log('(1/3 * 2/4)='+r3.tostring());
console.log('((1/3) / (2/4))='+r4.tostring());
var r5 = new Ratio(6,9);
r5.reduce();
console.log('6/9 ='+r5.tostring());
var r8 = new Ratio(100,10);
r8.reduce();
console.log('100/10 ='+r8.tostring());
var r9 = new Ratio(10,100);
r9.reduce();
console.log('10/100 ='+r9.tostring());