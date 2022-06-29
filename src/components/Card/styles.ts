import styled from 'styled-components'

const CardProject = styled.div`
    margin:0 auto;
    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (min-width: 768px){
        flex-direction: column;
        column-gap: 10px;
        align-items: center;
    }
`
const CardDetails = styled.div`
    text-align: left;

    h3{
        font-size: 1.8rem;
    }

    ul{
        padding: 0;
        display: flex;
    }
`

const CardImage = styled.div`
    position: relative;
    top:0;
    left:0;
    text-align: left;

    
    &:hover{
        & img {
            filter: grayscale(0) blur(4px);
        }
        & div{
            display: inline-block;
        }
    }

    & img{
        max-width: 100%;
        margin: 0;
        filter: grayscale(1);
        transition: all 0.3s ease 0.1s;
        object-fit: cover;
    }
`

const CardButtons = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    & div {
        position: relative;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const TechTag = styled.li`
    list-style: none;
    margin-right: 10px;
    text-transform:capitalize; 
    color: var(--color-white);
    background-color: var(--color-silver);
    padding:  5px;
    max-width: max-content;
    border-radius: 4px;
`

export { CardDetails, CardProject, CardImage, CardButtons, TechTag }