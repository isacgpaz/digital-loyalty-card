import * as IoIcons from 'react-icons/io';
import { FormStamp, Header, ManualStamp, Scanner, ScannerModal } from './styles';
import dynamic from 'next/dynamic';
import { Button } from '../../styles/DashboardStyles';
import { Overflow } from '../AdminModal/styles';
import { useUser } from '../../hooks/useUser';
import { useQRCode } from '../../hooks/useQRCode';

const QrScan = dynamic(() => import('react-qr-reader'), { ssr: false });

export function QRCodeScanner(){
  const { 
    handleScan, 
    handleError, 
    toggleStamp, 
    getManualStamp,
    isHandStampOpen, 
    isScannerOpen, 
    scan, 
  } = useQRCode();
  const { toggleUserDetails, setUserGoogleId, user } = useUser();

  return (
    <Overflow>
      <ScannerModal>
        <button type="button" onClick={ toggleStamp }>
          <IoIcons.IoIosClose /> 
        </button>
        
        <Header>
          <h2>Registrar <br /> Carimbo</h2>
          <p>
            { isScannerOpen 
            ? `Aponte o celular para o QRCode do cliente.` 
            : `Digite o Client ID para realizar novo carimbo.`
            }
          </p>
        </Header>
        
        { isScannerOpen && 
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
                <Button type="button" background="green" onClick={toggleUserDetails}>
                  Avançar
                </Button>
              </>
            }
          </Scanner>
        }

        { isHandStampOpen && 
          <ManualStamp>
            <FormStamp>
              <input 
                type="text" 
                placeholder="Client ID" 
                maxLength={21} 
                onChange={(event) => { 
                  getManualStamp(event.target.value);
                  setUserGoogleId(event.target.value);
                 }}
              />

              { (user && scan.length == 21) && 
                <Button type="button" background="green" onClick={() => { 
                  toggleUserDetails();
                }}>
                  Avançar
                </Button>
              } 
            </FormStamp>
          </ManualStamp>
        }
      </ScannerModal>
    </Overflow>
  )
}