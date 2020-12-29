import {pipe} from './pipe'
import {squaredMap} from './squaredMap'
import {sumArray} from './sumArray'

const pitagoras = pipe(
    squaredMap,
    sumArray,
    Math.sqrt
)

console.log(
    pitagoras([3,4])    
    // squaredMap => [(3*3), (4*4)]
    // sumArray => reduce => init = 0, 9 + 16
    // Math.sqrt => 25 => 5
)

// 5