import Image from 'next/image';
import * as IoIcons from 'react-icons/io';
import { useUser } from '../../hooks/useUser';
import { Overflow } from '../AdminModal/styles';
import { Header } from '../QRCodeValidator/styles';
import { Info, UserModal } from './styles';
import { Button } from '../../styles/DashboardStyles';
import { Loading } from '../Loading';
import { IFlag } from '../../interfaces/IFlag';
import { useQRCode } from '../../hooks/useQRCode';

export function UserDetails(){
  const { scan } = useQRCode();
  const { setUserGoogleId, addFlag, user, toggleUserDetails } = useUser();

  setUserGoogleId(scan);

  if (!user) return (
    <Overflow>
      <Loading width={80} height={80} stroke={10}/>
    </Overflow>  
  )

  return (
    <Overflow>
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
    </Overflow>
  )
}