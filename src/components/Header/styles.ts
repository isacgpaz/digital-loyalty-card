import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: .75rem 0;

  button{
    display: flex;
    place-items: center;
    
    background: none;
    border: none;
    color: var(--white);
    font-size: 2.25rem;
  }
`