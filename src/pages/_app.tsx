import "../styles/tailwind.css"
import { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import Head from "next/head"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Arthur Andrade</title>
      </Head>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
