import { ReactNode } from 'react'
import { ContainerStyled } from './styles'

interface ContainerProps{
    direction?: 'row' | 'column',
    justifyContent?: 'space-between' | 'space-around' | 'space-evenly' | 'center',
    hero?: boolean,
    children: ReactNode
}

function Container({ direction,hero,justifyContent, children }: ContainerProps){
  return(
    <ContainerStyled
      direction={direction}
      hero={hero}
      justifyContent={justifyContent}
    >
      {children}
    </ContainerStyled>
  )
}

export default Container