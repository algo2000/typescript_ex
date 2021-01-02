import {pick} from './pick/pick'

const obj = {name: 'Jane', age: 22, city: 'Seoul', country: 'Korea'}
console.log(
    pick(obj,['name','age']),
    pick(obj,['nam','ag'])
)