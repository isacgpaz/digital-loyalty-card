import Image from 'next/image';
import { Avatar, Container, UserInfo } from "./styles";

export function Profile(){
  return (
    <Container>
      <Avatar>
        <Image
          src="https://avatars.githubusercontent.com/u/49045230?v=4"
          alt="Foto do usuário"
          width={85}
          height={85}
        />
      </Avatar>

      <UserInfo>
        <h2>Caktus Restaurante</h2>
        <p>ISAC GOMES DA PAZ MARINHO</p>
        <span>CLIENT ID: 000 000 000</span>
      </UserInfo>
    </Container>
  )
}