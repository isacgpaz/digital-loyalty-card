import Image from 'next/image';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { useScanner } from '../../hooks/useScanner';
import { Container } from "./styles";

export function Header(){
  const { toggleScanner, isScannerOpen } = useScanner();

  return (
    <Container>
      <button type="button">
        <BiIcons.BiMenuAltLeft /> 
      </button>
      
      { /* TODO: Toggle image if user exists */ }

      <Image
        src="/logo.png"
        alt="Logo do Cacktus"
        width={100}
        height={40}
      />

      { /* TODO: Change button if user exists */ }

      <button type="button" onClick={ toggleScanner }>
        { isScannerOpen ? <IoIcons.IoIosClose /> : <MdIcons.MdFullscreen /> }
      </button>
    </Container>
  )
}