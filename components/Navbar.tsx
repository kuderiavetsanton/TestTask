import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = styled.nav`
    background: ${(props) => props.theme.mainBlack};
    height: 50px;
    display: flex;
    color: white;
    align-items: center;
    padding: 5px 70px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
`

const NavLink = styled.a<{ active?: boolean }>`
    color: ${(props) => (props.active ? 'white' : props.theme.dimGray)};
    font-size: 1.2rem;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: white;
    }
`

const Navbar: React.FC = () => {
    const router = useRouter()
    return (
        <Nav>
            <Link href="/">
                <NavLink active={router.asPath === '/'}>Home</NavLink>
            </Link>
            <Link href="/posts/new">
                <NavLink active={router.asPath === '/posts/new'}>
                    Create Post
                </NavLink>
            </Link>
        </Nav>
    )
}

export default Navbar
