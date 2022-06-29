import { ChevronDownIcon } from '@heroicons/react/solid'

import { tecnologies } from '../../data/tecnologies'

import meImage from '@images/me.jpg'
import Container from '@components/Container'
import { HeroContent, ImageProfile, MoveDown, TecDecoration,Tecnologies,TitleContent } from './styles'

import { useLanguage } from '@contexts/LanguageContext'
import { spanish, english } from '../../data/languages'

function Hero(){
  const { language } = useLanguage()

  return(
    <HeroContent>
      <main>
        <Container direction={'column'} hero>
          <TitleContent>
            <h2>Franco Callero</h2>
            <p>{language ? english.carrer : spanish.carrer}</p>
            <p className='black'>{language ? english.aboutMe: spanish.aboutMe}</p>
          </TitleContent>

          <ImageProfile src={meImage} />
        </Container>


        <Tecnologies>
          {
            tecnologies.map(({ url, Component },  index) =>
              <TecDecoration key={index}  href={url} target='_blank'>
                <Component />
              </TecDecoration>
            )
          }
        </Tecnologies>
      </main>

      <MoveDown href='#projects'>
        <ChevronDownIcon width='45px' />
      </MoveDown>

    </HeroContent>
  )
}

export default Hero