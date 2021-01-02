import {IValueable, Valueable} from './Valueable'

export const printValue = <T>(o: IValueable<T>): void => console.log(o.value)
export {IValueable, Valueable}