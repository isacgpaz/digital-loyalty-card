import { useScanner } from "../../hooks/useScanner";
import { Container, Header, UpdatedAt } from "./styles";

export function MainContainer({ children }){
  const { isScannerOpen } = useScanner();

  return (
    <Container>
      <Header>
        { isScannerOpen ? (
          <h2>Registrar <br /> Carimbo</h2>
        ) : (
          <>
            <h2>Cartão <br /> Fidelidade</h2>
            <small>DIGITAL</small>
          </>
        )}
      </Header>

      { children }


      { /* TODO: Render if user exists */ }

      <UpdatedAt>
        <span>Última Atualização:</span>
        Segunda-feira, 24/08/2021 às 21:16:13
      </UpdatedAt>
    </Container>
  )
}