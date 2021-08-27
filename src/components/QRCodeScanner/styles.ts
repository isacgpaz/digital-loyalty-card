import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: brightness(30%) blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.25rem;
`

export const ScannerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.75rem;

  background: var(--gray);
  border-radius: 10px;

  padding: 1.75rem;
  width: 100%;

  position: relative;

  button{
    &:first-child{
      position: absolute;
      top: 1rem;
      right: 1rem;
      
      display: flex;
      align-items: center;
  
      background: none;
      border: none;
  
      font-size: 2.5rem;
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .25rem;

  h2{
    font-size: 2rem;
  }
`

export const Scanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div{
    border-radius: 10px;

    video{
      border: 5px solid var(--gray-light);
      border-radius: 10px;
    }
  }

  h2{
    text-align: center;
    word-break: break-word;
  }
`