import { Layout } from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { QRCodeProvider } from '../contexts/QRCodeContext';
import { SidebarProvider } from '../contexts/SidebarContext';
import { UserProvider } from '../contexts/UserContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SidebarProvider>
        <UserProvider>
          <AuthProvider>
            <QRCodeProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QRCodeProvider>
          </AuthProvider>
        </UserProvider>
      </SidebarProvider>
      
      <GlobalStyles />
    </>
  )
}

export default MyApp
