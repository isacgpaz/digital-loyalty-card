import { Container } from "./styles";
import { Header } from "../Header";

export function Layout({ children }){
  return (
    <Container>
      <Header />
      
      { children }
    </Container>
  )
}