import Image from 'next/image';
import { Container, Logo } from "./styles";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { useAuth } from '../../hooks/useAuth';

export function Layout({ children }){
  const { user } = useAuth();
  
  return (
    <Container>
      <Header />
      
      { user ? <Profile /> : (
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