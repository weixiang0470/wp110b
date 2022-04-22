class ratio{
    constructor(r1,r2){
        this.r1 = r1;
        this.r2 = r2;
    }
    toString(){
        return (`${this.r1} / ${this.r2}`);
        //return (this.r1 + '/' + this.r2);
        //console.log(this.r1+'/'+this.r2);    
    }
}
var r= new ratio(2,3);
console.log(r+"");
//r.tostring();