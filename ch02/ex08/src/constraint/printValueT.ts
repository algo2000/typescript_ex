import {IValueable} from './IValueable'

export const printValueT = <Q, T extends IValueable<Q>>(o: T) => console.log(o.value)

export {IValueable}