import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { ButtonMain } from './Buttons'
import Card from './Card'

interface Props {
    title: string
    body: string
    id: number
}

const PostCard: React.FC<Props> = ({ title, body, id }) => {
    return (
        <Card>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link href={`/posts/${id}`}>
                <ButtonMain primary>View More</ButtonMain>
            </Link>
        </Card>
    )
}
export default PostCard
