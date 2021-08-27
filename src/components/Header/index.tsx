import Image from 'next/image';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { useQRCode } from '../../hooks/useQRCode';
import { Container } from "./styles";
import { useAuth } from '../../hooks/useAuth';
import { IFlag } from '../../interfaces/IFlag';

export function Header(){
  const { toggleQRCode, isQRCodeOpen } = useQRCode();
  const { user } = useAuth();

  const flagsChecked = user?.flags.filter((flag: IFlag) => { return flag.isChecked });

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