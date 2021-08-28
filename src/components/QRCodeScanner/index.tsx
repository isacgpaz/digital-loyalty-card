import * as IoIcons from 'react-icons/io';
import { useDashboard } from '../../hooks/useDashboard';
import { Container, Header, Scanner, ScannerModal } from './styles';
import dynamic from 'next/dynamic';
import { Button } from '../../styles/DashboardStyles';
import { useScanner } from '../../hooks/useScanner';

interface QrScanData{
  onScan: () => void;
  onError: () => void; 
}

const QrScan = dynamic(() => import('react-qr-reader'), { ssr: false });

export function QRCodeScanner(){
  const { toggleScanner } = useDashboard();
  const { handleScan, handleError, scan } = useScanner();

  return (
    <Container>
      <ScannerModal>
        <button type="button" onClick={ toggleScanner }>
          <IoIcons.IoIosClose /> 
        </button>
        
        <Header>
          <h2>Registrar <br /> Carimbo</h2>
          <p>Aponte o celular para o QRCode do cliente.</p>
        </Header>

        <Scanner>
          <div>
            <QrScan
              onError={handleError}
              onScan={handleScan}
              style={{ height: 300, width: 300 }}
            />
          </div>

          {scan && 
            <>
              <h2>Client ID {scan}</h2>
              <Button type="button" background="green">
                Avançar
              </Button>
            </>
          }
        </Scanner>
      </ScannerModal>
    </Container>
  )
}