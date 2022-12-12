import GlobalStyle from '@styles/GlobalStyle'
import Layout from '@components/Layout'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  })

  return (
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
