import * as R from 'ramda'

const numbers: number[] = R.range(1, 9 + 1)

const incNumber = R.pipe(
    R.tap((a:number[]) => console.log('before inc: ', a)),
    R.map(R.inc),
    R.tap((a:number[]) => console.log('after inc: ', a))
)

const newNumbers = incNumber(numbers)
console.log(newNumbers)

// before inc:  [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]
//   after inc:  [
//     2, 3, 4,  5, 6,
//     7, 8, 9, 10
//   ]
//   [
//     2, 3, 4,  5, 6,
//     7, 8, 9, 10
//   ]