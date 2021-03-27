import Head from 'next/head'
import { useSelector } from 'react-redux'
import React from 'react'
import { State } from '../store/store'
import styled from 'styled-components'

import Loader from '../components/Loader'
import PostCard from '../components/PostCard'
import Container from '../components/Container'

const PostGrid = styled.div`
    display:grid;
    gap:30px;
    grid-template-columns:repeat(auto-fill,minmax(350px, 1fr));
`

export default function Home() {
    const state = useSelector<State,State>(state => state)
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { !state.posts.length ? <Loader/> : 
                <Container>
                    <PostGrid>
                        { state.posts.map( post => (
                            <PostCard key={post.id} {...post} />
                        )) }
                    </PostGrid>
                </Container>
            }
        </div>
    )
}
