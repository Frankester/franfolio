import styled from 'styled-components'
import { ButtonStyled } from './Button.styled'

const CardProject = styled.div`
    width: 90%;
    margin:0 auto;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px){
        flex-direction: row;
        width: 50%;
        max-height: 500px; 
        column-gap: 10px;
        align-items: center;
    }

    & img{
        cursor:pointer;
        max-width: 100%;
        margin: 40px 0;

        @media only screen and (min-width: 768px){
            max-height: 100%; 
            max-width: 60%;
            object-fit: cover;
        }
    }
`
const CardDetails = styled.div`
    text-align: left;

    h3{
        font-size: 1.5em;
    }

    h4{
        font-size: 1.3em; 
    }
`

interface CardProps {
    url:string,
    technologies: string,
    description: string,
    title: string,
    whatis: string,
    image: string,
    code: string
}


function Card({ url, technologies, description, title, whatis, image, code }: CardProps){


  return(
    <CardProject>
      <CardDetails>
        <h3>{title}</h3>
        <p>{whatis}</p>
        <p>{description}</p>
        <h4>{technologies}</h4>
        <ButtonStyled href={url} target='_blank' variant='outline'>Web</ButtonStyled>
        <ButtonStyled href={code} target='_blank' variant='unstyled'>Code</ButtonStyled>
      </CardDetails>

      <img src={image}/>
    </CardProject>
  )
}

export default Card