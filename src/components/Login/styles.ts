import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  gap: 1rem;

  height: 25vh;
  margin-top: 1.8rem;

  h2{ 
    text-align: center;
    line-height: 1.675rem
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .75rem;

    p{
      text-align: center;
    }
  }

  a{
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    font-size: .785rem;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .75rem 1rem;

  background: var(--red);
  color: var(--white);
  border: none;
  border-radius: 4px;

  font-weight: 500;
  font-size: 1.25rem;
`
