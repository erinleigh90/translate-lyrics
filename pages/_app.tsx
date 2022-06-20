import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';

import SiteHeader from '../components/siteHeader';


Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SiteHeader />
      <Component {...pageProps} />
    </div>
  );
}
