import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin-top: 2rem;
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: var(--gray);
  border-radius: 10px;

  width: 100%;
  padding: 2rem 1.75rem;
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2{
    text-align: center;
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 3;

  width: 100%;

  input{
    font-size: 1.5rem;
    padding: 1rem;
    
    border-radius: 4px;
    border: 2px solid var(--gray-light);  

    transition: all .2s ease;
    
    &:focus{
      outline: 0;
      border: 2px solid var(--red);  
      
      padding: 1rem 1.5rem;

      &::placeholder{  
        color: var(--red); 
      }

      color: var(--red);
    }
  }
`