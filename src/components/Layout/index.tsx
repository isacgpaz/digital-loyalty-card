import Image from 'next/image';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { Container, Hero, Logo, Social } from "./styles";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { useAuth } from '../../hooks/useAuth';

export function Layout({ children }){
  const { user } = useAuth();
  
  return (
    <Container>
      <div>
        <Header />
            
        <Hero>
          <Image 
            src="/caktus.jpg" 
            alt="Caktus"
            width={192}
            height={192} 
          />
        </Hero>

        { user ? <Profile user={user} /> : (
          <Logo>
              <Image
              src="/logo.png"
              alt="Logo do Caktus"
              width={225}
              height={90}
            />
          </Logo>
        )}
      
        { children }
      </div>

      <Social>
        Desenvolvido por Isac Paz

        <div>

          <Link href="https://api.whatsapp.com/send?phone=5588981297428">
            <a target="_blank">
              <FaIcons.FaWhatsapp />
            </a>
          </Link>
          
          <Link href="mailto:isacgomesp@gmail.com">
            <a target="_blank">
              <MdIcons.MdEmail />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/isacgpaz">
            <a target="_blank">
              <FaIcons.FaLinkedin />
            </a>
          </Link>
        </div>
      </Social>
    </Container>
  )
}