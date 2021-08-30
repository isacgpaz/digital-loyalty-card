import Image from 'next/image';
import * as IoIcons from 'react-icons/io';
import { useScanner } from '../../hooks/useScanner';
import { useUser } from '../../hooks/useUser';
import { Container } from '../AdminModal/styles';
import { Header } from '../QRCodeScanner/styles';
import { Info, Status, UserModal } from './styles';
import { Button } from '../../styles/DashboardStyles';
import { Loading } from '../Loading';
import { IFlag } from '../../interfaces/IFlag';

export function UserDetails(){
  const { scan } = useScanner();
  const { setUserGoogleId, addFlag, user, toggleUserDetails, isUpdateLimit, isSucceded } = useUser();

  setUserGoogleId(scan);

  if (!user) return <Loading />

  return (
    <Container>
      <UserModal>
        <button type="button" onClick={ toggleUserDetails } style={{fontSize: '1.5rem'}}>
          <IoIcons.IoIosArrowBack /> 
        </button>
        
        <Header>
          <h2>Confirmação</h2>
          <p>
            Confirme os dados do cliente para continuar.
          </p>
        </Header>       

        { isUpdateLimit && <Status background="red">Você só pode adicionar um carimbo por vez.</Status> }
        { isSucceded && <Status background="green">Carimbo registrado com sucesso.</Status> }

        <Info>
          <Image 
            src={user.imageUrl}
            alt={`Foto de ${user.name}`}
            width={80}
            height={80}
          />

          <div>
            <p>{user.name}</p>
            
            <span>
              <small>Client ID</small> 
              {user.googleId}
            </span>
            
            <span>
              <small>Carimbos</small>
              {(user?.flags.filter((flag: IFlag) => { return flag.isChecked })).length}
            </span>
          </div>
        </Info>

        <Button type="button" background="green" onClick={() => { addFlag(user) }}>
          Confirmar Carimbo
        </Button>
      </UserModal>
    </Container>
  )
}