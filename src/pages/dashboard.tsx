import Head from 'next/head';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';
import { Container, Shortcuts, Button, Header, Table} from "../styles/DashboardStyles";
import { QRCodeScanner } from '../components/QRCodeValidator';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { IFlag } from '../interfaces/IFlag';
import { UserDetails } from '../components/UserDetails';
import { useUser } from '../hooks/useUser';
import { useQRCode } from '../hooks/useQRCode';
import { Loading } from '../components/Loading';

export default function Dashboard(){
  const { toggleScanner, toggleHandStamp, isStampOpen } = useQRCode();
  const { isUserDetailsOpen, users } = useUser();
  
  return (
    <>
      <Head>
        <title>Dashboard | Caktus Restaurante</title>
      </Head>
      
      <Container>
        <Header>
          <h2>
            <BsIcons.BsGearFill />
            Painel de Controle
          </h2>
        </Header>
        
        <Shortcuts>
          <div>
            <Button type="button" background="green" onClick={toggleScanner}>
              <IoIcons.IoQrCodeOutline />
              Ler QR Code
            </Button>
              
            <Button type="button" background="gray-dark" onClick={toggleHandStamp}>
              <BsIcons.BsPersonLinesFill />
              Digitar Client ID
            </Button>
              
            <small>Também disponível para Delivery.</small>
          </div>
        </Shortcuts>

        <Table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Carimbos</th>
            </tr>
          </thead>
          <tbody>
          {users &&
            users?.length != 0 && 
              users?.map(user => {
                return (
                  <tr key={user._id}>
                    <td>
                      <p>{user.name}</p>  
                      <span>ID {user.googleId}</span>
                      <small>
                        <BsIcons.BsCalendar />
                        {user.updatedAt}
                      </small>
                    </td>    
                    <td>{(user?.flags.filter((flag: IFlag) => { return flag.isChecked })).length}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

        {!users && <Loading width={35} height={35} stroke={6} />}
      </Container>
      
      { isStampOpen && <QRCodeScanner /> }
      { isUserDetailsOpen && <UserDetails /> }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['admin-token']: token } = parseCookies(ctx);
  
  if(!token){
    return{
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
    }
  }
}