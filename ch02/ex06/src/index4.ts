import { compose } from './compose'
import {h,g,f} from './f-g-h'

const composedFGH = compose(h, g, f)

const inc = (x: number) => x + 1
const composed = compose(inc, inc, inc)

console.log(
    composed(1)
)
// 4