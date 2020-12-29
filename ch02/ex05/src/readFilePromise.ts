import {readFile} from 'fs'

export const readFilePromise = (filename: string): Promise<string> => 
    new Promise<string>((resolve: (value: string) => void, reject: (error:Error|null) => void) => {
        readFile(filename, (err: Error|null, buffer:Buffer) => {
            if(err) reject(err)
            else resolve(buffer.toString())
        })
    })