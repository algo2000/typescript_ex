import {IValueable, printValueT} from './constraint/printValueT'
import {Valueable} from './constraint/Valueable'

printValueT(new Valueable(1))
printValueT({value: true})