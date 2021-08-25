import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <GlobalStyles />
    </>
  )
}

export default MyApp
