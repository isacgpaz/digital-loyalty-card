import { Layout } from '../components/Layout';
import { AdminCardModalProvider } from '../contexts/AdminCardModalContext';
import { AuthProvider } from '../contexts/AuthContext';
import { DashboardProvider } from '../contexts/DashboardContext';
import { QRCodeProvider } from '../contexts/QRCodeContext';
import { ScannerProvider } from '../contexts/ScannerContext';
import { UserProvider } from '../contexts/UserContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <AdminCardModalProvider>
            <DashboardProvider>
              <QRCodeProvider>
                <ScannerProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ScannerProvider>
              </QRCodeProvider>
            </DashboardProvider>
          </AdminCardModalProvider>
        </UserProvider>
      </AuthProvider>
      
      <GlobalStyles />
    </>
  )
}

export default MyApp
