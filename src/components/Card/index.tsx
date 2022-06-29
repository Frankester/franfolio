import Button from '@components/Button'
import { CardDetails, CardImage, CardProject, CardButtons, TechTag } from './styles'

interface CardProps {
    url:string,
    technologies: string[],
    description: string,
    title: string,
    whatis: string,
    image: string,
    code: string
}


function Card({ url, technologies, description, title, whatis, image, code }: CardProps){


  return(
    <CardProject>
      <CardImage>
        <img src={image} />
        <CardButtons>
          <div>
            <Button href={url} target='_blank' variant='outline' color='silver'>Web</Button>
            <Button href={code} target='_blank' variant='unstyled' color='silver'>Code</Button>
          </div>
        </CardButtons>
      </CardImage>

      <CardDetails>
        <h3>{title}</h3>
        <p>{whatis}</p>
        <p>{description}</p>
        <ul>
          {
            technologies.map((tech, index) =>
              <TechTag key={index}>{tech}</TechTag>
            )
          }
        </ul>
      </CardDetails>


    </CardProject>
  )
}

export default Card