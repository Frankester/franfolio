import styled from 'styled-components'

interface ButtonStyledProps{
    variant: 'outline' | 'unstyled'
}

const ButtonStyled = styled.a<ButtonStyledProps>`
    padding: 10px 20px;
    background-color: transparent;
    border: ${({ variant }) => variant === 'outline'? '2px solid var(--color-dark)' : 'none'};
    color: var(--color-dark);
    transition: linear 0.2s background-color ;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        background-color: ${({ variant }) => variant === 'outline'
    ? 'var(--color-dark)':'transparent'};

        color: ${({ variant }) => variant === 'outline'?
    'var(--color-alabaster)': 'var(--color-dark)' } ;
    }
`

export { ButtonStyled }