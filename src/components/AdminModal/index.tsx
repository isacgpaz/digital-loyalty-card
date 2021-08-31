import { Overflow } from "./styles";

export function AdminModal({ children }){
  return (
    <Overflow>
      { children }
    </Overflow>
  )
}