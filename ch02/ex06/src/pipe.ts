export const pipe = <T, R>(...functions: readonly Function[]): Function =>
    (x: T) => {
        return functions.reduce((value, func) => func(value), x)
    }