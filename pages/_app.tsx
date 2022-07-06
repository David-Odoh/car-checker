import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../shared/layouts/main-layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp
