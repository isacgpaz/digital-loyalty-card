import styled from 'styled-components';

export const Container = styled.nav`
  background: var(--black);
  color: var(--white);
  width: 280px;
  height: 100vh;
    
  z-index: 2;
  display: flex;
  position: fixed;
  top: 0;
  left: -100%;

  display: flex;
  flex-direction: column;
  align-content: space-between;

  transition: all .5s;
    
  &.isActive {
    left: 0;
  }

  ul{
    list-style: none;
    width: 100%;
    height: 80%;
    
    display: flex;
    flex-direction: column;
    justify-items: center;  
    gap: 0.1rem;
    padding: .5rem;

    li{
      font-weight: 500;
      transition: all .3s;
      border-radius: 6px;
        
      &:first-child{
        display: flex;
        justify-content: flex-end;
        align-items: center;

        font-size: 1.5rem;
        margin: 1rem;
      }

      p{
        font-size: 2rem;
        margin: .5rem 1rem .875rem;
        padding: 0 0 .65rem;
        border-bottom: 1px solid var(--white);
      }

      a{
        padding: .5rem 1rem;
        display: flex;
        align-items: center;
        gap: .5rem;

        font-size: 1.5rem;
      }
    }
  }

  div{
    padding: .5rem;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div{
      display: flex;
      flex-direction: column;
      gap: .5rem;

      p{
        display: flex;
        align-items: center;
        gap: .5rem;
      }
    }
  }
`

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;

  p{
    font-size: 1.5rem;
  }
`