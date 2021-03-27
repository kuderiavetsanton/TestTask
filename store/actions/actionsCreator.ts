import axios from "axios";
import { Post, Comment } from "../../types";
import { AppDispatch } from "../AppDispatch";
import { CREATE_COMMENT, CREATE_POST, DELETE_POST, EDIT_POST, FETCH_POSTS, FILL_POST } from "./actionsTypes";

interface createPostActionType {
    type:typeof CREATE_POST,
    post: Post
}
interface editPostActionType {
    type:typeof EDIT_POST,
    post: Post
}
interface fillPostActionType {
    type:typeof FILL_POST,
    post: Required<Post>
}
interface fetchPostsActionType {
    type:typeof FETCH_POSTS,
    posts: Post[]
}

interface createCommentActionType {
    type:typeof CREATE_COMMENT,
    comment: Comment
}
interface deletePostActionType {
    type:typeof DELETE_POST,
    id:number
}

export type ActionTypes = createCommentActionType | deletePostActionType| fetchPostsActionType | fillPostActionType | editPostActionType | createPostActionType

export const createPostThunk = (value: Pick<Post, 'title' | 'body'>) => { 
    return async (dispatch: AppDispatch) => {
        const res = await axios.post('/posts',value)
        dispatch({type:CREATE_POST,post:res.data}) 
    }
}

export const editPostThunk = (id:number) => (value: Pick<Post, 'title' | 'body'>) => { return async (dispatch: AppDispatch) => {
    const res = await axios.put(`/posts/${id}`,value)
    dispatch({type:EDIT_POST,post:res.data})  
}}

export const createCommentThunk = (value: Pick<Comment, 'postId' | 'body'>) => { return async (dispatch: AppDispatch) => {
    const res = await axios.post('/comments',value)
    dispatch({ type:CREATE_COMMENT,comment:res.data})
}}

export const fetchPostsThunk = () => async (dispatch) => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts')
    dispatch({type:FETCH_POSTS,posts:res.data})
}
export const deletePostThunk = (id:number) => async (dispatch) => {
    const res = await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`)
    dispatch({type:DELETE_POST,id})
}

export const fillPostAction = (value: Required<Post>): fillPostActionType => {
    return { type:FILL_POST, post:value}
}   