import styled from 'styled-components';

interface ButtonProps{
  background: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  margin-top: 1.875rem;
  padding: 1rem 0;

  width: 100%;
  height: 100%;

  color: var(--white);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  h2{
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 2rem;
  }
`

export const Shortcuts = styled.div`
  width: 100%;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .35rem;
  
  width: 100%;
  padding: 1rem;

  background: ${props => `var(--${props.background})`};
  color: var(--white);
  border: none;
  border-radius: 4px;

  font-weight: 700;
  font-size: 1.65rem;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  border: 3px solid var(--gray-dark);
  border-radius: 4px;
  
  background: var(--white);
  color: var(--gray-dark);
  transition: all .3s ease;

  &:focus-within{
    border: 3px solid var(--green);
    
    span{
      font-size: 1.35rem;
    }
  }

  input{
    border: none;
    border-radius: 4px;
    flex: 1;
    padding: .5rem;
    transition: all 0.2s ease;
    
    &:focus{
      outline: none;
    
      &~span{
        color: var(--green);
      }
    }
  }
  
  span{
    display: flex;
    align-items: center;
    padding: .25rem .65rem;
    font-size: 1.15rem;
    transition: all .2s ease;
  }
`