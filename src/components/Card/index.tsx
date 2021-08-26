import Image from 'next/image';
import { Badge, CheckedFlag, Container, Flag, Flags, Header } from "./styled";

export function Card(){
  return (
    <Container>
      <Header>
        <Badge background="green">
          0 Caktus
        </Badge>

        <p>
          A cada 12 almoços o 13º é por nossa conta. Visite o 
          Caktus Restaurante para liberar mais carimbos.
        </p>
      </Header>

      <Flags>
        <Flag>
          <CheckedFlag>
            <Image 
              src="/checked.png"
              alt="Checked"
              width={40}
              height={40}
            />  
          </CheckedFlag>
          <Image 
            src="/cactus.png"
            alt="Cactus flag"
            width={45}
            height={45}
          />
        </Flag>
        <Flag>
          <Image 
            src="/cactus.png"
            alt="Cactus flag"
            width={45}
            height={45}
          />
        </Flag>
      </Flags>
    </Container>
  )
}