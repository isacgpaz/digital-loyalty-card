import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2.5rem 0;
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 4px solid var(--white);
  border-radius: 50%;

  img{ 
    border-radius: 50%;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  color: var(--white);

  h2{ 
    font-size: 2rem;
  }

  p{
    text-transform: uppercase;
  }

  span{
    font-weight: 700;
  }
`