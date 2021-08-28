import * as IoIcons from 'react-icons/io';
import { useDashboard } from '../../hooks/useDashboard';
import { Header, Scanner, ScannerModal } from './styles';
import dynamic from 'next/dynamic';
import { Button } from '../../styles/DashboardStyles';
import { useScanner } from '../../hooks/useScanner';
import { useAdminCardModal } from '../../hooks/useAdminCardModal';
import { Container } from '../AdminModal/styles';

const QrScan = dynamic(() => import('react-qr-reader'), { ssr: false });

export function QRCodeScanner(){
  const { toggleScanner } = useDashboard();
  const { handleScan, handleError, scan } = useScanner();
  const { toggleAdminCardModal } = useAdminCardModal();

  return (
    <Container>
      <ScannerModal>
        <button type="button" onClick={ toggleScanner }>
          <IoIcons.IoIosClose /> 
        </button>
        
        <Header>
          <h2>Registrar <br /> Carimbo</h2>
          <p>
            Aponte o celular para o QRCode do cliente.
          </p>
        </Header>
        
        <Scanner>
          <div>
            <QrScan
              onError={handleError}
              onScan={handleScan}
              style={{ height: 300, width: 300 }}
            />
          </div>
  
          { scan && 
            <>
              <h2>Client ID {scan}</h2>
              <Button type="button" background="green" onClick={toggleAdminCardModal}>
                Avançar
              </Button>
            </>
          }
        </Scanner>
      </ScannerModal>
    </Container>
  )
}