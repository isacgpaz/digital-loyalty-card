import { Card } from "../components/Card";
import { MainContainer } from "../components/MainContainer";
import { QRCodeScanner } from "../components/QRCodeScanner";
import { useScanner } from "../hooks/useScanner";

export default function Home() {
  const { isScannerOpen } = useScanner();

  return (
    <>
      <MainContainer>
        { isScannerOpen ? <QRCodeScanner /> : <Card />}
      </MainContainer>
    </>
  )
}
