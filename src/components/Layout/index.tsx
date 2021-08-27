import Image from 'next/image';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { Container, InfoScreenDevice, Logo, Social } from "./styles";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { useAuth } from '../../hooks/useAuth';
import MediaQuery from 'react-responsive';

export function Layout({ children }){
  const { user } = useAuth();
  
  return (
    <MediaQuery maxWidth={1024}>
      <Container>
        <div>
          <Header />
            
          { user ? <Profile /> : (
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
            <Link href="/">
              <a>
                <MdIcons.MdEmail />
              </a>
            </Link>

            <Link href="/">
              <a>
                <FaIcons.FaLinkedin />
              </a>
            </Link>

            <Link href="/">
              <a>
                <FaIcons.FaGithub />
              </a>
            </Link>
          </div>
        </Social>
      </Container>
    </MediaQuery>
  )
}