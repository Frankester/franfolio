import styled from 'styled-components'

const DetailsContact = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & label{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8em;

    & p {
      margin: 0;
    }

    & input {
      width: 80%;
      height: 2.5em;
      font-size: 1em;
      padding: 0 10px;
      border-radius: 5px;
      border:none;
      outline: none;

      &:focus-visible{
        border-bottom:4px solid var(--color-silver);
      }

      @media only screen and (min-width: 768px){
        width: 95%;
        margin-left: 10px;
      }
    }

  }

  & textarea {
    font-size: 1.5em;
    height: 6em;
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 5px;
    outline: none;
    border: none;


    &:focus-visible{
      border-bottom:4px solid var(--color-silver);
    }
  }

  & button {
    max-width: max-content;
    place-self: end;
    text-transform: capitalize;
    font-size: 1em;
    padding: 10px 20px;
    background-color: transparent; 
    border: 2px solid var(--color-silver);
    color: var(--color-silver); 
    transition:  linear 0.2s background-color;
    &:hover{
      background-color: var(--color-silver);
      color: var(--color-white); 
      cursor: pointer;
    }
  }
`

export {
  DetailsContact
}

