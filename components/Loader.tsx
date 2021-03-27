import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoaderDiv = styled.div`
    width: 80px;
    height: 80px;
    background: linear-gradient(
        transparent 50%,
        ${(props) => props.theme.primary}
    );
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotate} 1s linear infinite;
    border-radius: 50%;
    margin: 100px auto;
    span {
        background-color: white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
`

export default function Loader() {
    return (
        <LoaderDiv>
            <span></span>
        </LoaderDiv>
    )
}
