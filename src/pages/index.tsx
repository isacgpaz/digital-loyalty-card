import Head from "next/head";
import { Card } from "../components/Card";
import { Login } from "../components/Login";
import { MainContainer } from "../components/MainContainer";
import { QRCodeGenerate } from "../components/QRCodeGenerate";
import { Success } from "../components/Success";
import { useAuth } from "../hooks/useAuth";
import { useQRCode } from "../hooks/useQRCode";
import { IFlag } from "../interfaces/IFlag";

export default function Home() {
  const { isQRCodeOpen } = useQRCode();
  const { user } = useAuth();

  const flagsChecked = user?.flags.filter((flag: IFlag) => { return flag.isChecked });

  return (
    <>
      <Head>
        <title>Cartão Fidelidade | Caktus Restaurante</title>
      </Head>

      <MainContainer>
        { user ? (isQRCodeOpen ? 
          <QRCodeGenerate /> : flagsChecked.length == 13 ? <Success /> : <Card />
        ) : (
          <Login />
        )}
      </MainContainer>
    </>
  )
}
