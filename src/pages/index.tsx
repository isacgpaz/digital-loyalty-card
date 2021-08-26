import { Card } from "../components/Card";
import { Login } from "../components/Login";
import { MainContainer } from "../components/MainContainer";
import { QRCodeScanner } from "../components/QRCodeScanner";
import { useAuth } from "../hooks/useAuth";
import { useScanner } from "../hooks/useScanner";

export default function Home() {
  const { isScannerOpen } = useScanner();
  const { user } = useAuth();

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
