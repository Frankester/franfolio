import { MainApp,GlobalStyle } from './Globalstyles'

import Hero from '@containers/Hero'
import Footer from '@containers/Footer'
import Contact from '@containers/Contact'
import Projects from '@containers/Projects'
import NavBar from '@containers/NavBar'
import LanguageProvider from './contexts/LanguageContext'


function App() {

  return (
    <MainApp>
      <GlobalStyle />
      <LanguageProvider>
        <NavBar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </LanguageProvider>

    </MainApp>
  )
}

export default App
