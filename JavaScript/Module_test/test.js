import { Vector2D } from "./Vector2D.js";
import { Vector_array } from "./VectorArray.js";

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