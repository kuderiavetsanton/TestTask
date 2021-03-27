import { ActionTypes } from '../actions/actionsCreator'
import {
    CREATE_COMMENT,
    CREATE_POST,
    DELETE_POST,
    EDIT_POST,
    FETCH_POSTS,
    FILL_POST,
} from '../actions/actionsTypes'
import { State } from '../store'

export default function Reducer(state: State, action: ActionTypes) {
    let newPosts
    switch (action.type) {
        case FETCH_POSTS:
            return { posts: action.posts }
            break

        case CREATE_POST:
            return { posts: [...state.posts, action.post] }
            break
        case EDIT_POST:
            newPosts = state.posts.map((post) => {
                if (post.id === action.post.id) {
                    return { ...action.post, comments: post.comments }
                }
                return post
            })
            return { posts: newPosts }
            break
        case CREATE_COMMENT:
            newPosts = state.posts.map((post) => {
                if (post.id === action.comment.postId) {
                    if (!post.comments) post.comments = []
                    post.comments = [...post.comments, action.comment]
                }
                return post
            })
            return { posts: newPosts }
            break
        case FILL_POST:
            newPosts = state.posts.map((post) => {
                if (post.id === action.post.id) {
                    return action.post
                }
                return post
            })
            return { ...state, posts: newPosts }
            break
        case DELETE_POST:
            newPosts = state.posts.filter((post) => {
                return post.id !== action.id
            })
            return { ...state, posts: newPosts }
            break

        default:
            return state
            break
    }
}
