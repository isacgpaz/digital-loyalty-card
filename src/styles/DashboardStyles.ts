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

export const Table = styled.table`
  width: 100%;
  
  background: var(--gray);
  border: 1px solid var(--gray-light);
  border-spacing: 0;
  border-radius: 4px;
  color: var(--black);

  font-size: 1.1rem;

  td, tr, th{
    border: 1px solid var(--gray-light);
    border-top: none;
    padding: .75rem;
    width: 100%;
  }

  th{
    text-transform: uppercase;
    color: var(--gray-dark);
    font-size: .875rem;

    &:first-child{
      text-align: left;
    }
  }

  td, th{
    &:first-child{
      border-left: none;
    }

    &:last-child{
      border-right: none;
    }
  }

  td{
    &:first-child{
      display: flex;
      flex-direction: column;
      gap: .12rem;
      
      p{
        font-weight: 500;
      }
  
      span{
        font-size: 1rem;
      }

      small{
        display: flex;
        align-items: center;
        gap: .25rem;

        color: var(--gray-dark);
      }
    }
  }
`