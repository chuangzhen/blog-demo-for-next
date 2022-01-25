import { useEffect } from 'react';
import '../styles/globals.css'
import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import {getUA} from '../utils/util'

function MyApp({ Component, pageProps }: AppProps) {
 
  
 
  useEffect(() => {
    const { isMobile } = getUA();
    window.isMobile = isMobile;

    
  },[])
  
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
