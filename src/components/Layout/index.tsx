import Image from 'next/image';
import { Container, Logo } from "./styles";
import { Header } from "../Header";
import { Profile } from "../Profile";

export function Layout({ children }){
  const isLogged = true;
  
  return (
    <Container>
      <Header />
      
      { isLogged ? <Profile /> : (
        <Logo>
          <Image
            src="/logo.png"
            alt="Logo do Caktus"
            width={175}
            height={70}
          />
        </Logo>
      )}
  
      { children }
    </Container>
  )
}