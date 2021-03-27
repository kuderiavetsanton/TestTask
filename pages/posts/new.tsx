import Container from '../../components/Container'
import React from 'react'
import PostModify from '../../components/PostModify'
import { createPostThunk } from '../../store/actions/actionsCreator'

export default function New() {
    return (
        <Container>
            <PostModify
                bodyInit=""
                titleInit=""
                modifyName="Create"
                dispatchAction={createPostThunk}
            />
        </Container>
    )
}
