import { Layout } from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { QRCodeProvider } from '../contexts/QRCodeContext';
import { UserProvider } from '../contexts/UserContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <AuthProvider>
          <QRCodeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QRCodeProvider>
        </AuthProvider>
      </UserProvider>
      
      <GlobalStyles />
    </>
  )
}

export default MyApp
