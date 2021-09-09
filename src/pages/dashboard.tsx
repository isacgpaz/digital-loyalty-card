import Head from 'next/head';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';
import { Container, Shortcuts, Button, Header, Search, Status} from "../styles/DashboardStyles";
import { QRCodeScanner } from '../components/QRCodeValidator';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { UserDetails } from '../components/UserDetails';
import { useUser } from '../hooks/useUser';
import { useQRCode } from '../hooks/useQRCode';
import { Loading } from '../components/Loading';
import { Table } from '../components/Table';

export default function Dashboard(){
  const { toggleScanner, toggleHandStamp, isStampOpen } = useQRCode();
  const { isUserDetailsOpen, users, getUsersByName, resultSearch, isUpdateLimit, isSucceded } = useUser();
  
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
          </div>
        </Shortcuts>

        <Search>
          <input 
            type="text" 
            placeholder="Pesquisar por Cliente"
            onChange={(event) => {
              getUsersByName(event.target.value);
            }}
          />

          <span>
            <FaIcons.FaSearch />
          </span>
        </Search>
        
        { isUpdateLimit && <Status background="red">Você só pode adicionar um carimbo por vez.</Status> }
        { isSucceded && <Status background="green">Carimbo registrado com sucesso.</Status> }

        <Table users={
          resultSearch ? (
            resultSearch?.length == 0 ? users : resultSearch 
          ) : users
        } />

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