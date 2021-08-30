import { Layout } from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { QRCodeProvider } from '../contexts/QRCodeContext';
import { ScannerProvider } from '../contexts/ScannerContext';
import { UserProvider } from '../contexts/UserContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <ScannerProvider>
            <QRCodeProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QRCodeProvider>
          </ScannerProvider>
        </UserProvider>
      </AuthProvider>
      
      <GlobalStyles />
    </>
  )
}

export default MyApp
