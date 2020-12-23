import * as U from '../utils/makeRandomNumver';
import IPerson from './IPerson'

export default class Person implements IPerson {
    constructor(public name: string, public age: number) { }
}

export const makePerson = (name: string, 
    age: number = U.makeRandomNumber()) => ({ name, age })
