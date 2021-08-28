import Head from 'next/head';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';
import { Container, Shortcuts, Button, Header, Table} from "../styles/DashboardStyles";
import { api } from '../services/api';
import { IUser } from '../interfaces/IUser';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useDashboard } from '../hooks/useDashboard';
import { QRCodeScanner } from '../components/QRCodeScanner';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
interface IDashboard{
  users: Array<IUser>;
}

export default function Dashboard({ users }: IDashboard){
  const { toggleScanner, isScannerOpen } = useDashboard();

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
              
            <Button type="button" background="gray-dark">
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
            { users?.length != 0 ? (
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
                    <td>13</td>
                  </tr>
                )
              })
            ) : 
              null
            }
          </tbody>
        </Table>
      </Container>
      
      { isScannerOpen && <QRCodeScanner />}
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
  
  const { data } = await api.get('users', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });  

  const users: Array<IUser> = data.users.map((user: IUser) => {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      googleId: user.googleId,
      imageUrl: user.imageUrl,
      flags: user.flags,
      updatedAt: format(parseISO(user.updatedAt), "dd 'de' MMMM 'de' yyyy 'às' H'h'm", { locale: ptBR })
    }
  })

  return {
    props: {
      users
    }
  }
}