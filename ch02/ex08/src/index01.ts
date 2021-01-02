import { printValue, Valueable } from './generic/printValue'

printValue(new Valueable<number>(1))
printValue(new Valueable<boolean>(true))
printValue(new Valueable<string>('hello'))
printValue(new Valueable<number[]>([1, 2, 3]))

printValue(new Valueable(1))
printValue(new Valueable(true))
printValue(new Valueable('hello'))
printValue(new Valueable([1, 2, 3]))


// 1
// true
// hello
// [ 1, 2, 3 ]