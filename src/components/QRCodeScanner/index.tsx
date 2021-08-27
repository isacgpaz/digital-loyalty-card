import Image from 'next/image';
import QRCode from 'react-qr-code';
import { useAuth } from '../../hooks/useAuth';
import { Code, Container } from "./styles";

export function QRCodeScanner(){
  const { user } = useAuth();

  return (
    <Container>
      <Code>
        <QRCode value={user.googleId} />
      </Code>

      <div>
        <span>Client ID</span>
        <h2>{user.googleId}</h2>
      </div>
    </Container>
  )
}