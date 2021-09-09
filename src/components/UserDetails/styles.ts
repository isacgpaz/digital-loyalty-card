import styled from 'styled-components';
import { ScannerModal } from '../QRCodeValidator/styles';

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
