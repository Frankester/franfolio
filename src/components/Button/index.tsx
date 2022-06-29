
import { ButtonStyled } from './styles'

interface ButtonProps {
    variant: 'outline' | 'unstyled',
    href: string,
    target: '_blank' | '_self',
    color: 'silver' | 'dark',
    children: React.ReactNode
}

function Button({ variant, href, target, color, children }: ButtonProps){
  return(
    <ButtonStyled
      variant={variant}
      href={href}
      target={target}
      color={color}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button