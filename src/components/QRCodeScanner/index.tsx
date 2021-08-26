import Image from 'next/image';
import { Code, Container } from "./styles";

export function QRCodeScanner(){
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

      <h2>Cliente ID: 000 000 000</h2>
    </Container>
  )
}