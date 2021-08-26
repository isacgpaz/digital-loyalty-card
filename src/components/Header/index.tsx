import Image from 'next/image';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { useScanner } from '../../hooks/useScanner';
import { Container } from "./styles";
import { useAuth } from '../../hooks/useAuth';

export function Header(){
  const { toggleScanner, isScannerOpen } = useScanner();
  const { user } = useAuth();

  return (
    <Container>
      <button type="button">
        <BiIcons.BiMenuAltLeft /> 
      </button>
      
      { user && 
        <Image
          src="/logo.png"
          alt="Logo do Cacktus"
          width={100}
          height={40}
        />
      }

      { user ? (
        <button type="button" onClick={ toggleScanner }>
          { isScannerOpen ? <IoIcons.IoIosClose /> : <MdIcons.MdFullscreen /> }
        </button>
      ) : (
        <button type="button">
          <IoIcons.IoMdHelpCircle /> 
        </button>
      )}
    </Container>
  )
}