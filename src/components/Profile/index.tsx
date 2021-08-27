import Image from 'next/image';
import { useAuth } from '../../hooks/useAuth';
import { Avatar, Container, UserInfo } from "./styles";

export function Profile(){
  const { user } = useAuth();
  
  return (
    <Container>
      { user && <>
        <Avatar>
          <Image
            src={user?.imageUrl}
            alt={`Foto de ${user?.name}`}
            width={85}
            height={85}
          />
        </Avatar>

        <UserInfo>
          <h2>Caktus Restaurante</h2>
          <p>{user?.name}</p>
          <span>CLIENT ID: {user?.googleId}</span>
        </UserInfo>
      </>
      }
    </Container>
  )
}