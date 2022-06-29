import styled from 'styled-components'

const ProjectsStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4,1fr);
    gap: 30px;

    @media only screen and (min-width: 768px){   
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2,1fr);
    }
`

export {
  ProjectsStyled
}