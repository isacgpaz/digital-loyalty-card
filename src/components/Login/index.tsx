import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { Button, Container } from "./styles";

export function Login(){
  return (
    <Container>
      <h2>
        A cada 12 almoços, <br />
        o 13º é por nossa conta.
      </h2>

      <div>
        <p>
          Faça login para acessar o seu <br /> Cartão Fidelidade Caktus Restaurante.
        </p>

        <Button type="button">
          <FaIcons.FaGoogle />
          Fazer Login com o Google
        </Button>
   
       <Link href="">
          <a>Termos de Uso</a>
        </Link>
      </div>
    </Container>
  )
}