import styled from 'styled-components'
import { ChevronDownIcon } from '@heroicons/react/solid'

import meImage from './assets/me.jpg'
import { Container } from './Container.styled'

const HeroContent = styled.div`
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding: 100px 0;

  @media only screen and (min-width: 768px){
    padding: 180px 0 80px 0;
  }

  & svg{
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    min-height: 32px; 
    z-index: -1;
    color: var(--color-dark);  
    animation: jumping 0.5s linear 0.1s infinite alternate  backwards running;

    @keyframes jumping {
      0%{
        top: 0;
      }  
      50%{
          top: 15px;
      }
      100%{
          top: 20px;
      }
    }

    &:hover{
      cursor:pointer;
    }
  }
`
const TitleContent = styled.div`
  width: 100%;  
  height: 100%;

   @media only screen and (min-width: 768px){
    width: 60%;
   }

  h2{
    font-size: 2.5em;
    color: var(--color-dark);
    margin: 0;
  }
  p{
    margin-top: 15px;
    color: var(--color-silver);
  }

  & span {
    display:block;
    white-space: nowrap;
    border-right: 2px solid;
    width: 23ch;

    animation: typing 2s steps(23) 1,
    blink .5s infinite step-end alternate;
    overflow: hidden;

    @keyframes typing {
        from {
            width: 0;
        }
    }
    @keyframes blink{
        50% {
            border-color: transparent;
        }
    }
  }
`
const Tecnologies = styled.p`
    display:block;
    margin: 20px auto;
    width: 90%;
    text-align:center;

    @media only screen and (min-width:  768px){
        width: 50%;
        margin: 50px auto;
        text-align:left;
    }
`
const TecDecoration = styled.span`
    margin-right: 20px;

    &:last-child::after{
        display:none;
    }
    &:nth-child(2n)::after{
        background-color: #43a343b8;
    }
    &:nth-child(3n)::after{
        background-color: #006dff;
    }

    &::after{
        content:'';
        position: relative;
        top:50%;
        left:10px;
        transform: translateY(-50%);
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #e86060;
        border-radius: 50%;
        z-index: -1;
    }
`
const ImageProfile = styled.img`
    object-fit: cover;
    max-width: 60%;
    clip-path: circle(50% at 50% 50%);
    z-index: -1 ;

    @media only screen and (min-width: 768px){
        max-width: 30%;
    }
`



function Hero(){
  const tecnologies = ['React', 'Redux', 'Typescript', 'Javascript', 'NodeJS', 'MongoDB',
    'Mongoose', 'GraphQL', 'Express']

  return(
    <HeroContent>
      <div>
        <Container  direction='column' hero>
          <TitleContent>
            <h2>Franco Callero</h2>
            <p><span>MERN stack web developer</span></p>
          </TitleContent>
          <ImageProfile src={meImage} />

        </Container>


        <Tecnologies>
          {
            tecnologies.map((tec, index) => (
              <TecDecoration key={index}>{tec}</TecDecoration>
            ))
          }
        </Tecnologies>
      </div>

      <a href='#aboutme'><ChevronDownIcon width='32px' /></a>

    </HeroContent>
  )
}

export default Hero