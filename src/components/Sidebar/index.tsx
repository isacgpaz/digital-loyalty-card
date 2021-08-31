import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import Image from 'next/image';
import { Container, Copy } from "./styles";
import { useSidebar } from '../../hooks/useSidebar';
import Link from 'next/link';

export function Sidebar(){
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <Container className={isSidebarOpen && 'isActive'}>
      <ul>
        <li onClick={toggleSidebar}>
          <FaIcons.FaTimes />
        </li>

        <li>
          <p>Nos Siga</p>
        </li>

        <li>
          <Link href="https://www.instagram.com/caktusrestaurante/">
            <a target="_blank">
              <FaIcons.FaInstagram />
              Instagram
            </a>
          </Link>
        </li>

        <li>
          <Link href="https://www.facebook.com/CaktusRestaurante/">
            <a target="_blank">
              <FaIcons.FaFacebookSquare />
              Facebook
            </a>
          </Link>
        </li>

        <li>
          <Link href="https://api.whatsapp.com/send?phone=558821569577">
            <a target="_blank">
              <FaIcons.FaWhatsapp />
              Whatsapp
            </a>
          </Link>
        </li>
      </ul>

      <div>
        <div>
          <p><RiIcons.RiMapPinFill />O MELHOR RODÍZIO DO CARIRI!</p>
          <p><BsIcons.BsCalendar /> Dom a Dom</p>
          <p><FiIcons.FiClock />11h às 15h e 18h às 24h.</p>
          <p><FaIcons.FaPhoneAlt /> (88) 2156-9577</p>
        </div>

        <Copy>
          <p>Caktus Restaurante &copy;</p>
          <small>Todos os direitos reservados</small>
        </Copy>
      </div>
    </Container>
  )
}