import Image from 'next/image';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { useQRCode } from '../../hooks/useQRCode';
import { Container } from "./styles";
import { useAuth } from '../../hooks/useAuth';
import { useSidebar } from '../../hooks/useSidebar';
import { Sidebar } from '../Sidebar';

export function Header(){
  const { toggleQRCode, isQRCodeOpen } = useQRCode();
  const { user } = useAuth();
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <Container>
      <button type="button" onClick={toggleSidebar}>
        <BiIcons.BiMenuAltLeft /> 
      </button>
      
      <Sidebar />

      { user && 
        <Image
          src="/logo.png"
          alt="Logo do Cacktus"
          width={100}
          height={40}
        />
      }

      { user ? (
        <button type="button" onClick={ toggleQRCode }>
          { isQRCodeOpen ? <IoIcons.IoIosClose /> : <MdIcons.MdFullscreen /> }
        </button>
      ) : (
        <button type="button">
          <IoIcons.IoMdHelpCircle /> 
        </button>
      )}
    </Container>
  )
}