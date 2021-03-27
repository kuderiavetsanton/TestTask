import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ButtonMain, FormButton } from '../../components/Buttons'
import Card from '../../components/Card'
import Container from '../../components/Container'
import { FormInput } from '../../components/Input'
import Loader from '../../components/Loader'
import PostModify from '../../components/PostModify'
import { Post } from '../../types'
import { createCommentThunk, deletePostThunk, editPostThunk, fillPostAction } from '../../store/actions/actionsCreator'
import { State } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'




const CommentForm = styled.form`
    display:flex;
    justify-content:space-between;
`

interface PropsType{
    post:Required<Post>,
}

const SinglePost: React.FC<PropsType> = ({ post }) => {
    //states
    const [ isEdit, setIsEdit ] = useState(false)
    const [commentBody, setCommentBody] = useState('')

    //routers and redux dependencies
    const router = useRouter()
    const dispatch = useDispatch()
    const state = useSelector<State, State>(state => state)

    useEffect(() => {
        dispatch(fillPostAction(post))
    },[])

    //single post retrieving
    const singlePost: Post = state.posts.find( element => element.id === post.id)
    if(singlePost && !singlePost.comments){
        singlePost.comments = post.comments

    }

    const handleCreateComment = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(commentBody.trim() === ''){
            return
        }
        dispatch(createCommentThunk({ postId:singlePost.id, body:commentBody }))
        setCommentBody('')
    }

    const handleDelete = (e) => {
        dispatch(deletePostThunk(singlePost.id))
        router.push('/')
    }
    return (
        <Container>
            {!!singlePost ? 
            <div>
                {isEdit ?
                    <PostModify bodyInit={ singlePost.body } titleInit={ singlePost.title } modifyName="Edit" dispatchAction={editPostThunk(singlePost.id)}/>
                    : 
                    <Card>
                        <h1 style={{textAlign:'center'} }>Single Post</h1>
                        <h3>{singlePost.title}</h3>
                        <p>{singlePost.body}</p>
                        <ButtonMain primary onClick={e => {
                            setIsEdit(true)
                        }}>Edit</ButtonMain>
                        <ButtonMain onClick={ handleDelete }>Delete</ButtonMain>
                    </Card>
                }
                <h3 style={{marginTop:'30px'}}>Comment Section</h3>
                <div style={{marginLeft:'50px'}}>
                    {
                        singlePost.comments.map( comment => {
                            return (
                                <Card key={comment.id}>
                                    <h5>{comment.body}</h5>
                                </Card>
                            )
                        })
                    }
                </div>
                <div style={{marginTop:'30px',marginLeft:'50px'}}>
                    <h4>Create Comment</h4>
                    <CommentForm onSubmit={handleCreateComment}>
                        <FormInput value={commentBody} onChange={e => setCommentBody(e.target.value)}/>
                        <FormButton>Create Comment</FormButton>
                    </CommentForm>
                </div>
            </div>
            : <Loader/>}
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts')
    const paths = res.data.map(post => ({params:{ id: `${post.id}`}}))
    return {
        paths,
        fallback:true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${params.id}?_embed=comments`)
    const post: Post = res.data
  
    return {
      props: {
        post,
      },
    }
  }

export default SinglePost