import Image from 'next/image';
import { Badge } from '../Card/styled';
import { Container } from "./styles";

export function Success(){
  return (
    <Container>
      <Badge background="green-light">
          13 Caktus
        </Badge>

      <div>
        <Image 
          src="/achievement.png"
          alt=""
          width={260}
          height={260}
        />
      </div>

      <p>
        O Caktus Restaurante agradece pela sua parceria. <br />
        Vá até o caixa para resgatar seu prêmio!
      </p>
    </Container>
  )
}