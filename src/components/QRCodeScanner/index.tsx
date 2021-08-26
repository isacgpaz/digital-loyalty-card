import Image from 'next/image';
import { useAuth } from '../../hooks/useAuth';
import { Code, Container } from "./styles";

export function QRCodeScanner(){
  const { user } = useAuth();

  return (
    <Container>
      <Code>
        <Image 
          src="/code.png"
          alt=""
          width={260}
          height={260}
        />
      </Code>

      <div>
        <span>Client ID</span>
        <h2>{user.googleId}</h2>
      </div>
    </Container>
  )
}