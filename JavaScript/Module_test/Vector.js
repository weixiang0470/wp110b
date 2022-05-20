export class Vector{
    sub(v2){
        return this.add(v2.neg())
    }
    distance(v2){
        return this.sub(v2).length();
    }
}