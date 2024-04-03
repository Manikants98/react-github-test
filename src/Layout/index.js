import { Footer, Header } from 'Components/Common'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="relative h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
