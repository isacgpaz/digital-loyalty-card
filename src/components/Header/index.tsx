import Image from 'next/image';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { useScanner } from '../../hooks/useScanner';
import { Container } from "./styles";

export function Header(){
  const { toggleScanner, isScannerOpen } = useScanner();
  console.log(isScannerOpen)

  return (
    <Container>
      <button type="button">
        <BiIcons.BiMenuAltLeft /> 
      </button>

      <Image
        src="/logo.png"
        alt="Logo do Cacktus"
        width={100}
        height={40}
      />
    
      <button type="button" onClick={ toggleScanner }>
        { isScannerOpen ? <IoIcons.IoIosClose /> : <MdIcons.MdFullscreen /> }
      </button>
    </Container>
  )
}