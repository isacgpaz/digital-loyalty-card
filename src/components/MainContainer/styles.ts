import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;

  background: var(--gray);
  border-radius: 10px;
  height: 100%;

  padding: 1.75rem;
  margin-top: 2rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  gap: .2rem;

  h2{ 
    font-size: 2.65rem;
    line-height: 2.5rem
  }

  small{
    font-size: .9rem;
    font-weight: 500;
    letter-spacing: .3rem;
  }
`

export const UpdatedAt = styled.small`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;
  font-size: .785rem;

  span{
    font-weight: 700;
  }
`