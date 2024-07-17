
interface Origin {
    author?:string,
    [key: string]: unknown
}


export interface Poetry {
    content?: string,
    origin?: Origin,
    [key: string]: unknown
}