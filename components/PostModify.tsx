import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FormButton } from './Buttons'
import { FormInput } from './Input'

import { useRouter } from 'next/router'

const PostForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
`

const FormControl = styled.div`
    width: 100%;
    margin: 5px 0;
`

const FormTextarea = styled.textarea`
    font-size: 1.1rem;
    width: 100%;
    padding: 5px 8px;
    outline-color: ${(props) => props.theme.mainBlack};
    resize: vertical;
    border: 1px solid ${(props) => props.theme.dimGray};
    border-radius: ${(props) => props.theme.borderRadius};
    margin-top: 5px;
`

interface Props {
    bodyInit: string
    titleInit: string
    modifyName: string
    dispatchAction: any
}

const PostModify: React.FC<Props> = ({
    bodyInit,
    titleInit,
    dispatchAction,
    modifyName,
}) => {
    const [title, setTitle] = useState(titleInit)
    const [body, setBody] = useState(bodyInit)
    const dispatch = useDispatch()

    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (title.trim() === '' && body.trim() === '') {
            return
        }
        dispatch(dispatchAction({ body, title }))
        setTitle('')
        setBody('')
        router.push('/')
    }
    return (
        <>
            <PostForm onSubmit={handleSubmit}>
                <FormControl>
                    <label htmlFor="title">Title:</label>
                    <FormInput
                        full
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="body">Body:</label>
                    <FormTextarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        id="body"
                    />
                </FormControl>
                <FormButton>{modifyName} Post</FormButton>
            </PostForm>
        </>
    )
}

export default PostModify
