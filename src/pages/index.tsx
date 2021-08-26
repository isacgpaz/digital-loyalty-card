import { Card } from "../components/Card";
import { Login } from "../components/Login";
import { MainContainer } from "../components/MainContainer";
import { QRCodeScanner } from "../components/QRCodeScanner";
import { useScanner } from "../hooks/useScanner";

export default function Home() {
  const { isScannerOpen } = useScanner();

  const user = true;

  return (
    <>
      <MainContainer>
        { user ? (isScannerOpen ? 
          <QRCodeScanner /> : <Card />
        ) : (
          <Login />
        )}
      </MainContainer>
    </>
  )
}
