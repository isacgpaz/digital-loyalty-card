import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;

    span{
      font-size: .9rem;
    }
  }
`

export const Code = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--white);
  border: 5px solid #00000012;
  border-radius: 10px;

  padding: .75rem;

  svg{
    border-radius: 10px;
  }
`