import { ContainerFooter } from './styles'

function Footer(){
  return(
    <ContainerFooter>
      <p>Frankester &copy; {new Date().getFullYear()}</p>
    </ContainerFooter>
  )
}

export default Footer