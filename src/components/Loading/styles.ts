import styled, { keyframes } from 'styled-components';

interface LoaderProps{
  width: number;
  height: number;
  stroke?: number | 16;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loader = styled.div<LoaderProps>`
  border: ${props => props.stroke}px solid var(--red);
  border-radius: 50%;
  border-top: ${props => props.stroke}px solid var(--gray);
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`