import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Header></Header>
  )
}

export default MyApp
