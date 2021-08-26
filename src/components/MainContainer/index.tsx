import { Container, Header, UpdatedAt } from "./styles";

export function MainContainer({ children }){
  return (
    <Container>
      <Header>
        <h2>Cartão <br /> Fidelidade</h2>
        <small>DIGITAL</small>
      </Header>

      { children }

      <UpdatedAt>
        <span>Última Atualização:</span>
        Segunda-feira, 24/08/2021 às 21:16:13
      </UpdatedAt>
    </Container>
  )
}