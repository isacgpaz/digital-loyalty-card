import { Layout } from '../components/Layout';
import { ScannerProvider } from '../contexts/ScannerContext';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScannerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScannerProvider>

      <GlobalStyles />
    </>
  )
}

export default MyApp
