import styled from "styled-components"

export const FormButton = styled.button`
    margin-top:5px;
    padding:7px 5px;
    color:white;
    font-size:1.1rem;
    cursor:pointer;
    border:none;
    border-radius:${props => props.theme.borderRadius};
    outline-color: ${props => props.theme.mainBlack};
    background-color:${props => props.theme.primary};
    outline:none;
    transition:.3s;
    &:hover{
        background:#008cff;
    }
`

export const ButtonMain = styled.a<{primary?: boolean}>`
    color:${props => props.primary ? props.theme.primary : '#bd1939'};
    align-self:flex-end;
    margin-left:auto;
    font-size:1rem;
    margin-right:10px;
    cursor: pointer;
    transition:.3s linear;
    margin-top:5px;
    display:inline-block;
    &:hover {
        text-decoration:underline;
    }
`