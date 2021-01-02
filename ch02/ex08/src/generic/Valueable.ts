
import {IValueable} from './IValueable'

export class Valueable<T> implements IValueable<T> {
    constructor(public value: T) {}
}

export {IValueable}