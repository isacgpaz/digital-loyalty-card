import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { SignInData } from "../interfaces/SIgnInData";
import { Button } from "../styles/DashboardStyles";
import { Container, Form, Header, LoginBox } from "../styles/LoginStyles";

export default function Login(){
  const { register, handleSubmit } = useForm();
  const { authAdmin } = useAuth();

  async function handleSignIn(data: SignInData){
    await authAdmin(data);
  }

  return (
    <Container>
      <LoginBox>
        <Header>
          <h2>Acesso Restrito</h2>  
          <p>Somente pessoal autorizado.</p>      
        </Header>

        <Form onSubmit={handleSubmit(handleSignIn)}>
          <input {...register('email')} type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
          <input {...register('password')} type="password" id="password" name="password" placeholder="Digite sua senha" required/>
          
          <Button type="submit" className="primaryButton" background="red">Entrar</Button>
        </Form>
      </LoginBox>
    </Container>
  )
}