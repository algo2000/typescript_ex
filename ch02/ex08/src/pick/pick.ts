export const pick = (obj: { [x: string]: any; }, keys: any[]) => keys.map((key: string | number) => ({ [key]: obj[key] }))
    .reduce((result: any, value: any) => ({ ...result, ...value }), {})