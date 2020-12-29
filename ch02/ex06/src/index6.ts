import { pipe } from './pipe'

const add = (x:number) => (y:number) => x + y
const inc = add(1)

const add3 = pipe(
    inc,    // = add(1)
    add(2)
)

console.log(
    add3(1) // 1 + 1 + 2
)
//4