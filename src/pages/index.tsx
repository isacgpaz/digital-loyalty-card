import { Card } from "../components/Card";
import { Login } from "../components/Login";
import { MainContainer } from "../components/MainContainer";
import { QRCodeScanner } from "../components/QRCodeScanner";
import { Success } from "../components/Success";
import { useAuth } from "../hooks/useAuth";
import { useScanner } from "../hooks/useScanner";
import { IFlag } from "../interfaces/IFlag";

export default function Home() {
  const { isScannerOpen } = useScanner();
  const { user } = useAuth();

  const flagsChecked = user?.flags.filter((flag: IFlag) => { return flag.isChecked });

  return (
    <>
      <MainContainer>
        { user ? (isScannerOpen ? 
          <QRCodeScanner /> : flagsChecked.length == 13 ? <Success /> : <Card />
        ) : (
          <Login />
        )}
      </MainContainer>
    </>
  )
}
