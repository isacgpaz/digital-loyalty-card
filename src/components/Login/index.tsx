import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import * as FaIcons from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { Button, Container } from "./styles";

export function Login(){
  const { responseGoogle } = useAuth();

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

        <GoogleLogin 
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          render={renderProps => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <FaIcons.FaGoogle />
              Fazer Login com o Google
            </Button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
   
       <Link href="/">
          <a>Termos de Uso</a>
        </Link>
      </div>
    </Container>
  )
}