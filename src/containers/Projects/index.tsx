import Card from '@components/Card'
import { Section } from '../../Globalstyles'

import { english, spanish } from '../../data/languages'

import { ProjectsStyled } from './styles'
import { useLanguage } from '@contexts/LanguageContext'

function Projects(){
  const { language } = useLanguage()

  const projects = language ? english.projects : spanish.projects

  return(
    <Section id='projects'>
      <h2>{language ? english.sections[0] : spanish.sections[0]}</h2>

      <ProjectsStyled>
        {
          projects.map((e,index) => (
            <Card key={index}
              title={e.title}
              description={e.description}
              url={e.url}
              whatis={e.whatis}
              technologies={e.technologies}
              image={e.image}
              code={e.code}
            />
          ))
        }
      </ProjectsStyled>
    </Section>
  )
}

export default Projects