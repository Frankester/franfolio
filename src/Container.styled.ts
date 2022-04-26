import styled from 'styled-components'


interface ContainerProps{
    direction?: 'row' | 'column',
    justifyContent?: 'space-between' | 'space-around' | 'space-evenly' | 'center',
    hero?: boolean
}


const Container = styled.div<ContainerProps>`
  display: flex;
  align-items:center;
  flex-direction: ${({ direction }) => direction ? direction: 'row'};
  justify-content: ${({ justifyContent }) => justifyContent? justifyContent : 'space-between'};
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 768px){
      width: 50%;
      flex-direction: ${({ hero,direction }) => hero ? 'row': direction? direction: 'row'};
  }

`

export { Container }