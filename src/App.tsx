import styled,{ createGlobalStyle } from 'styled-components'
import { MenuIcon } from '@heroicons/react/solid'
import { useState } from 'react'

import { Container } from './Container.styled'
import Hero from './Hero'
import Card from './Card'
import { ButtonStyled } from './Button.styled'

import meImage from './assets/me.jpg'
import proj1 from './assets/Franfocus-app.png'
import proj2 from './assets/Franclock.png'
import proj3 from './assets/supermarket-list-app.png'
import proj4 from './assets/Gastos-app.png'

const MainApp = styled.div`
  width: 100%;
  height:100%;
`

const GlobalStyle = createGlobalStyle`
  :root{
    --color-ligth: #e1e1e1;
    --color-dark: #1C1C1C;
    --color-white: #FAFAFF;
    --color-silver: #b0af48;
    --color-alabaster: #ECEBE4;
  }

  *, *:after, *:before{
    box-sizing: border-box;
  }

  html,body, #root{
    height:100%;
    box-sizing: inherit;  
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: var(--color-ligth);
    margin:0;
    font-family: sans-serif;
  }

  p{
    font-size: 1.2em;
  }

  img{
    object-fit: cover;
  }
`
const NavBar = styled.div`
  position:fixed;
  width:100%;
  display:flex;
  justify-content: space-between;
  background-color: var(--color-dark);
  color: var(--color-ligth);
  padding: 20px;

  @media only screen and (min-width: 769px){
    & svg {
      display none;
    }
  }

  & h2 {
    margin: 0;  
  }

  a{
    text-decoration: none;
    color: var(--color-ligth);
  }
`

interface MenuListPorps{
  openClose: boolean
}

const MenuList = styled.ul<MenuListPorps>`
  padding:0;
  margin:0;
  display: ${({ openClose }) => openClose ? 'flex': 'none'};
  flex-direction: column;
  text-align:center;
  position: absolute;
  top: 72px;
  left: 0;
  width: 100%;

  @media only screen and (min-width: 768px){
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: center;
    justify-content: space-between;  
  }

  a{
    color: var(--color-dark);
    text-decoration: none;

    @media only screen and (min-width: 768px){
      color: var(--color-ligth);
    }
  }
`
const MenuItem = styled.li`
  padding:20px 0; 
  list-style:none;
  width: 100%;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-ligth);

  @media only screen and (min-width: 768px){
    background-color: var(--color-dark);
    color: var(--color-ligth);
    border-bottom: none;
    padding: 0;

    &:hover{
      color: var(--color-white);
      cursor: pointer;
    }
  }
`
const Section = styled.section`
  margin:0 auto;
  text-align:center;
  scroll-margin: 100px;

  h2{
    text-transform: uppercase;
    margin: 0;
    font-size: 2em;
  }
`
const ContentAboutMe = styled.div`
  width: 90%;
  margin: 24px auto;
  
  @media only screen and (min-width: 768px){
    width: 50%;
    display: flex;
    max-height: 500px;
    column-gap: 20px;
  }

  & img{
    max-width: 100%;

    @media only screen and (min-width: 768px){
      max-width: 35%;
    }
  }

  p{
    text-align: left;
    margin: 10px 0 ;

    @media only screen and (min-width: 768px){
      display:inline-block;
    }
  }

`
const DetailsAboutMe = styled.div`
  display: flex;
  flex-direction:column;

  @media only screen and (min-width: 768px){
    justify-content: center;   
  }
`
const DetailsContact = styled.div`
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 768px){
    width: 50%;
  }

  p{
    text-align: left;
    margin-bottom: 45px;
  }
`
const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content:center;
  background-color: var(--color-dark);
  color: var(--color-alabaster);

  margin-top: 100px;
  padding: 20px 0;
  
`

function useOpenClose(initialValue?: boolean): [openClose: boolean, handleOpenClose: (value?: boolean) => void]{
  const [openClose, setOpenClose] = useState<boolean>(() => initialValue? initialValue : false)

  const handleChange = (value?: boolean) => {
    if(value !== undefined){
      setOpenClose(value)
    } else {
      setOpenClose(currentValue => !currentValue)
    }
  }

  return [openClose, handleChange]
}

function App() {
  const [openClose, handleOpenClose] = useOpenClose()

  const projects = [{ title: 'Gastos app',
    url:'https://gastosjs.vercel.app/',
    whatis: 'An app to control your expenses and income',
    description: 'In this application you can register an income or an expense and at the end of the month you can know if you lost or gained money based on the information entered.',
    technologies: 'React (javascript)',
    image: proj4,
    code: 'https://github.com/Frankester/gastosjs.git',
  },
  {
    title: 'Franfocus',
    whatis: 'An application to increase your productivity based on pomodoro technique',
    description: 'In this app you can add a Task, select a Task to do, add some notes, remove, update, and change the time at the timer if you want from Settings',
    technologies: 'React (Typescript)',
    url: 'https://fran-focus.vercel.app/',
    image: proj1,
    code: 'https://github.com/Frankester/Franfocus.git',

  },{
    title: 'Franclock',
    whatis: 'An application with timer, alarms and the current time',
    description: 'In this application you can select an alarm, set the tone, select the days it sounds, and you can take your time with a stopwatch and know what time it is in your zone.',
    technologies: 'React (Javascript) & React Router',
    url: 'https://franclock.vercel.app/',
    image: proj2,
    code: 'https://github.com/Frankester/franclock.git'

  },{
    title: 'Supermarket List',
    whatis: 'A supermarket List app',
    description: 'In this application you can save your shopping list before you go shopping and it will help you to remember it.',
    technologies: 'React (Javascript)',
    url: 'https://supermarket-list-rosy.vercel.app/',
    image: proj3,
    code: 'https://github.com/Frankester/supermarket-list.git'
  }
  ]

  const handleOpenMenu = () => {
    handleOpenClose()
  }

  return (
    <MainApp>
      <GlobalStyle />
      <NavBar>
        <Container>
          <h2><a href='/'>Frankester</a></h2>
          <MenuIcon width='32' onClick={handleOpenMenu}/>
          <MenuList openClose={openClose}  >
            {
              ['About Me', 'Projects', 'Contact'].map((element, index) => (
                <a
                  href={`#${element.replace(/ /g,'').toLowerCase()}`}
                  onClick={handleOpenMenu}
                  key={index}
                >
                  <MenuItem>{element}</MenuItem>
                </a>
              ))
            }
          </MenuList>
        </Container>
      </NavBar>

      <Hero />

      <Section id='aboutme'>
        <h2>About Me</h2>
        <ContentAboutMe>
          <img src={meImage} loading='lazy' />

          <DetailsAboutMe>
            <p>I am passionate and curious about how things work in web applications. I love Frontend but sometimes I want to touch some backend to understand the logic behind it.</p>
            <p>In my free time I like to learn new technologies or play codewars in javascript, but most of my time is dedicated to study information systems engineering at UTN BA in Argentina.</p>
          </DetailsAboutMe>

        </ContentAboutMe>
      </Section>

      <Section id='projects'>
        <h2>Projects</h2>
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
      </Section>


      <Section id='contact'>
        <h2>Contact</h2>

        <DetailsContact>
          <p>If you have reached to this point and you want to know more about me, you can concact me via mail</p>
          <ButtonStyled
            variant='outline'
            href='mailto:francotomascallero@gmail.com'
            target='_blank'
          >
            Let&apos;s talk
          </ButtonStyled>
        </DetailsContact>
      </Section>

      <ContainerFooter>
        <p>Frankester &copy; {new Date().getFullYear()}</p>
      </ContainerFooter>

    </MainApp>
  )
}

export default App
