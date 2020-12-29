export const compose = <T, R>(...functions: readonly Function[]): Function =>
    (x: T) => {
        const deepCopiedFunctions = [...functions]
        return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
    }