import { create } from './create/create'

class Point { constructor(public x: number, public y: number) { } }

[
    create(Date),
    create(Point, 0, 0)

    // { new(...args: any): T } => Point
    // ...args: any[] => 0
    // ...args: any[] => 1

].forEach(s => console.log(s))

// 2021-01-01T15:00:15.528Z
// Point { x: 0, y: 0 }