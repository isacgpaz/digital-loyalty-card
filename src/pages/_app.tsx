import { Layout } from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <GlobalStyles />
    </>
  )
}

export default MyApp
