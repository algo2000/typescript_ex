import { curriedSum } from './curryN/curriedSum'

console.log(
    curriedSum(),
    curriedSum(1),
    curriedSum(1)(2),
    curriedSum(1)(2)(3),
    curriedSum(1)(2)(3)(4),
    curriedSum(1, 2, 3, 4)
)
// [Function (anonymous)] 
// [Function (anonymous)] 
// [Function (anonymous)] 
// [Function (anonymous)] 
// 10 
// 10