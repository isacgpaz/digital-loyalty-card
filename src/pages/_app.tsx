import { Layout } from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { ScannerProvider } from '../contexts/ScannerContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ScannerProvider>
          <Layout>
          <Component {...pageProps} />
        </Layout>
        </ScannerProvider>
      </AuthProvider>
      
      <GlobalStyles />
    </>
  )
}

export default MyApp
