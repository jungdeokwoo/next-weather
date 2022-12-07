import styled from 'styled-components'
import Footer from '@components/Footer'
import Header from '@components/Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContent>
      <Header />
      {children}
      <Footer />
    </MainContent>
  )
}

export default Layout

const MainContent = styled.main`
  width: 100%;
  padding: 10px;
`
