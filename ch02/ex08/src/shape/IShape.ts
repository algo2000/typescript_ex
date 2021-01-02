export interface ISquare { tag: 'square', size: number }
export interface IRectangle { tag: 'rectangle', width: number, height: number }
export interface ICircle { tag: 'circle', radius: number }

export type IShape = ICircle | IRectangle | ICircle