import { createContext, ReactNode, useContext, useState } from 'react'

interface LangegueContext {
    language: boolean,
    changeLanguage:  () => void
}

const LanguageContext = createContext<LangegueContext>({
  language: true,
  changeLanguage: () => { console.log('something went wrong')}
})

function LanguageProvider({ children }: { children: ReactNode}){
  const [isEnglish, setLanguage] = useState(true)

  const handleLanguage = () => {
    setLanguage(currentLanguage => !currentLanguage)
  }
  return (
    <LanguageContext.Provider value={{ language: isEnglish, changeLanguage: handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}


export default LanguageProvider

function useLanguage(){
  const lenguageValues = useContext(LanguageContext)
  return lenguageValues
}

export {
  useLanguage
}