import styled from 'styled-components'


const HeroContent = styled.div`
  height: 100%;
  display:flex;
  flex-direction:column;
  position: relative;
  
  main{
    position: absolute;
    top:72px;
    bottom:0;
    left:0;
    right:0;
    height: min-content;
    width: 100%;
    margin: auto;
  }
  
`

const TitleContent = styled.div`
  @media only screen and (min-width: 768px){
    width: 60%;
  }

  & > h2{
    font-size: 3rem;
    color: var(--color-dark);
    margin: 0;
  }
  & > p{
    margin-top: 15px;
    color: var(--color-silver);
  }

  & > p.black {
    color: var(--color-dark);
    margin-bottom: 0;
  }
`
const Tecnologies = styled.p`
    margin: 0 auto;
    width: 90%;
    text-align:center;

    @media only screen and (min-width:  768px){
      width: 60%;
      margin: 50px auto;
      text-align:left;
    }
`
const TecDecoration = styled.a`
    margin-right: 20px;

    & svg {
      max-width: 32px;
      transition: all 0.8s ease-in-out 6s 1s;
      filter: grayscale(1);

      @media only screen and (min-width: 768px){
        max-width: 45px;
      }

      &:hover {
        filter: grayscale(0);
      }
    }
`
const ImageProfile = styled.img`
  object-fit: cover;
  max-width: 40%;
  border-radius: 10px;
  margin: 20px 0;

  @media only screen and (min-width: 768px){
      max-width: 30%;
      margin-left: 10px;
  }
`

const MoveDown = styled.a`
  display:none;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateY(-50%);

  @media only screen and (min-width: 768px){
    display:block;

    svg{
      position: relative;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      min-height: 32px; 
      z-index: -1;
      color: var(--color-silver);  
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
  }

`

export { ImageProfile, TecDecoration, Tecnologies, TitleContent, HeroContent, MoveDown }