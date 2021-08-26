import styled from 'styled-components';

interface BadgeProps{
  background: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;

  margin-bottom: 2rem;

  p{
    text-align: center;
    width: 90%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const Badge = styled.span<BadgeProps>`
  background: ${props => `var(--${props.background})`};
  border-radius: 25px;
  color: var(--white);

  padding: .15rem .875rem;

  font-weight: 700;
  font-size: 1rem;
`

export const Flags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Flag = styled.div`
  display: flex;
  position: relative;
`

export const CheckedFlag = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 80%;
`