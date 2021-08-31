import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useAuth } from "../../hooks/useAuth";
import { useQRCode } from "../../hooks/useQRCode";
import { IFlag } from "../../interfaces/IFlag";
import { Container, Header, UpdatedAt } from "./styles";

export function MainContainer({ children }){
  const { isQRCodeOpen } = useQRCode();
  const { user } = useAuth();

  const flagsChecked = user?.flags.filter((flag: IFlag) => { return flag.isChecked });

  return (
    <Container>
      <Header>
        { isQRCodeOpen ? (
          <h2>Registrar <br /> Carimbo</h2>
        ) : (
          flagsChecked?.length == 13 ? (<>
              <h2>Parabéns</h2>
              <p>Você conseguiu!</p>
            </>
          ) : ( <>
              <h2>Cartão <br /> Fidelidade</h2>
              <small>DIGITAL</small>
            </>
          )
        )}
      </Header>

      { children }
     
      { user && 
        <UpdatedAt>
          <span>Última Atualização:</span>
          {format(parseISO(user.updatedAt), "EEEE',' dd 'de' MMMM 'de' yyyy 'às' HH'h'm", { locale: ptBR }) }
        </UpdatedAt>
      }
    </Container>
  )
}