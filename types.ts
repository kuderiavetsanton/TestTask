export interface Post{
    title:string,
    body:string,
    id:number
    comments?:Comment[]
}

export interface Comment {
    postId:number,
    body:string,
    id:number,
}