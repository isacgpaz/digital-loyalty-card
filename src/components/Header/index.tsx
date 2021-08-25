import Image from 'next/image';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import { Container } from "./styles";

export function Header(){
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

      <button type="button">
        <MdIcons.MdFullscreen /> 
      </button>
    </Container>
  )
}