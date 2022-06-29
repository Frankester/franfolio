import styled from 'styled-components'


interface ButtonStyledProps{
    variant: 'outline' | 'unstyled',
    color: 'silver' | 'dark'
}

const ButtonStyled = styled.a<ButtonStyledProps>`
    display: inline-block;
    padding: 10px 20px;
    background-color: transparent;
    border: ${({ variant, color }) => variant === 'outline' && color === 'silver' ?  '2px solid var(--color-silver) ': variant === 'outline' ? '2px solid var(--color-dark)' : 'none'};
    color: ${({ color }) => color === 'silver' ? 'var(--color-silver)' : 'var(--color-dark)' };
    transition: linear 0.2s background-color ;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        background-color: ${({ variant, color }) => variant === 'outline' && color === 'silver'
    ? 'var(--color-silver)' : variant === 'outline' ? 'var(--color-dark)':'transparent'};

        color: ${({ variant, color }) => variant === 'outline' && color === 'silver' ? 'var(--color-ligth)' : variant === 'outline' ? 'var(--color-ligth)': 'var(--color-ligth)' } ;
    }
`
export { ButtonStyled }