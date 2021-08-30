import styled, { keyframes } from 'styled-components';
import { ScannerModal } from '../QRCodeScanner/styles';

export const UserModal = styled(ScannerModal)`
  button{
    &:first-child{
      position: absolute;
      top: 1rem;
      left: 1rem;
      
      display: flex;
      align-items: center;
  
      background: none;
      border: none;
  
      font-size: 2.5rem;
    }
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  width: 100%;
  
  font-size: 1.5rem;
  
  img{
    border-radius: 50%;
  }

  div{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-transform: uppercase;

    p{
      font-weight: 700;
    }
  
    span{
      display: flex;
      flex-direction: column;
      font-weight: 700;
      
      small{
        font-size: .9rem;
        color: var(--gray-dark);
      }
    }
  }
`

const fade = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
`

interface StatusProps{
  background: string;
}

export const Status = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-items: center;

  background: ${props => `var(--${props.background})`};
  border-radius: 4px;
  color: var(--white);

  padding: .5rem 1rem;

  width: 100%;
  opacity: 0;
  animation: ${fade} 5s cubic-bezier(0, 0.04, 0.9, 0.6);
`