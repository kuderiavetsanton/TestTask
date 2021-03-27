import styled from 'styled-components'

export const FormInput = styled.input<{ full?: boolean }>`
    width: ${(props) => (props.full ? '100%' : 'calc(100% - 150px)')};
    padding: 5px 8px;
    border: 1px solid ${(props) => props.theme.dimGray};
    border-radius: ${(props) => props.theme.borderRadius};
    outline-color: ${(props) => props.theme.mainBlack};
    margin-top: 5px;
    font-size: 1.1rem;
`
