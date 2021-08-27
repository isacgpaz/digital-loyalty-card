import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  height: 100vh;

  padding: 0 1.25rem;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  color: var(--white);

  margin-bottom: 1rem;
  font-size: .9rem;

  div{
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.25rem;
  }
`

export const InfoScreenDevice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 100vh;

  color: var(--white);

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    gap: 1rem;
  }
`