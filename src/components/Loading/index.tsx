import { Loader } from "./styles"

interface LoadingProps{
  width: number;
  height: number;
  stroke?: number
}

export function Loading({width, height, stroke}: LoadingProps){
  return (
    <Loader width={width} height={height} stroke={stroke} />
  )
}

