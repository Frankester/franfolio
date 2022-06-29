import styled from 'styled-components'

const NavBarStyled = styled.div`
  position:fixed;
  width:100%;
  display:flex;
  justify-content: space-between;
  background-color: var(--color-dark);
  color: var(--color-ligth);
  padding: 20px;
  z-index:1;

  @media only screen and (min-width: 768px){
    & svg {
      display: none;
    }
  }

  & h2 {
    margin: 0;  
  }

  & a{
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
    align-items: center;
    justify-content: inherit;  
    width: 50%;

    & a:last-child{
      margin-left: 10em;
    }

    & svg{
      display:inline-block;
    }
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

const LanguageOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding:20px 0;
  background-color: var(--color-white);
  color: var(--color-dark);
  border: none;

  & p{
    margin: 0;
    padding: 0;
  }

  @media only screen and (min-width: 768px){
    color: var(--color-white);
    background-color: transparent;
    padding: 0;
  }
`

export {
  MenuItem,
  MenuList,
  NavBarStyled,
  LanguageOption,
}