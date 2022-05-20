import { Point } from './point.js'

export class Vector extends Point {

  constructor(array) {
    super()
    this.a = array
  }

  neg() {
    let a = []
    let i=0
    while (i<this.a.length) {
      a[i] = this.a[i]*-1
      i++;
    }
    return new Vector(a)
  }

  add(p2) {
    let a = []
    for (let i=0; i<this.a.length; i++) {
      a[i] = this.a[i]+p2.a[i]
    }
    return new Vector(a)
  }

  dot(p2) {
  }

  length() {
    let r = 0
    for (let v of this.a) {
      r += v*v
    }
    return Math.sqrt(r)
  }
  
  toString() {
    return JSON.stringify(this.a)
  }
}
