import { MenuIcon, TranslateIcon } from '@heroicons/react/solid'

import Container from '@components/Container'
import useOpenClose from '@hooks/useOpenClose'
import { LanguageOption, MenuItem, MenuList, NavBarStyled } from './styles'
import { useLanguage } from '@contexts/LanguageContext'
import { english, spanish } from '../../data/languages'


function NavBar(){
  const { language, changeLanguage } = useLanguage()
  const [openClose, handleOpenClose] = useOpenClose()
  const sections = language ? english.sections : spanish.sections

  return(
    <NavBarStyled>
      <Container>
        <h2><a href='/'>Frankester</a></h2>
        <MenuIcon width='32' onClick={() => handleOpenClose()}/>

        <MenuList openClose={openClose}>
          {
            sections.map((element, index) => (
              <a
                href={`#${element.replace(/ /g,'').toLowerCase()}`}
                onClick={() => handleOpenClose()}
                key={index}
              >
                <MenuItem>{element}</MenuItem>
              </a>
            ))
          }

          <LanguageOption onClick={() => changeLanguage()}>
            <TranslateIcon width='32'/>
            <p>{language ? 'En': 'Es'}</p>
          </LanguageOption>
        </MenuList>

      </Container>
    </NavBarStyled>
  )
}

export default NavBar