import {inc} from './first-order-func'
import {add} from './second-order-func'
import {add3} from './third-order-func'

console.log(
    inc(1)  // 2
)

console.log(
    add(1)(2)  // 3
)

console.log(
    add3(1)(2)(3)  // 6
)