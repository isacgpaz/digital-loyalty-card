import { Layout } from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { DashboardProvider } from '../contexts/DashboardContext';
import { QRCodeProvider } from '../contexts/QRCodeContext';
import { ScannerProvider } from '../contexts/ScannerContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <DashboardProvider>
          <QRCodeProvider>
            <ScannerProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ScannerProvider>
          </QRCodeProvider>
        </DashboardProvider>
      </AuthProvider>
      
      <GlobalStyles />
    </>
  )
}

export default MyApp
