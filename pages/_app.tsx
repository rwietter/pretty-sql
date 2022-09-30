import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'react-toastify/dist/ReactToastify.css';

SyntaxHighlighter.registerLanguage(
  'sql',
  require('react-syntax-highlighter/dist/cjs/languages/prism/sql').default
);

function MyApp({ Component, pageProps }: AppProps) {
  return  <Component {...pageProps} />
}

export default MyApp
