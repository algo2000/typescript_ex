import * as R from 'ramda'

const value = 1
const newValue = R.inc(value)

const newArray = R.pipe(
    R.map(R.inc)
)([value])