import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';
import { Container, Shortcuts, Button, Header, Table} from "../styles/DashboardStyles";

export default function Dashboard(){
  return (
    <Container>
      <Header>
        <h2>
          <BsIcons.BsGearFill />
          Painel de Controle
        </h2>
      </Header>
    
      <Shortcuts>
        <div>
          <Button type="button" background="green">
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
            <th>
              <FaIcons.FaFlag />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <p>Isac Gomes</p>  
              <span>ID 000000000000</span>
              <small>
                <BsIcons.BsCalendar />
                00/00/0000 às 00h00
              </small>
            </td>    
            <td>13</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}