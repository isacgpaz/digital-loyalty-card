import { Container } from "./styles";
import { Header } from "../Header";
import { Profile } from "../Profile";

export function Layout({ children }){
  return (
    <Container>
      <Header />
      
      <div>
        <Profile />
        { children }
      </div>
    </Container>
  )
}