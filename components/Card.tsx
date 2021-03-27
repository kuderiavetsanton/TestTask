import styled from 'styled-components'

const Card = styled.div`
    padding: 10px;
    border-bottom: #dddddd solid 1px;
    p {
        font-size: 0.8rem;
        color: ${(props) => props.theme.dimGray};
    }
    h3 {
        color: ${(props) => props.theme.mainBlack};
        margin: 10px 0px;
    }
`

export default Card
