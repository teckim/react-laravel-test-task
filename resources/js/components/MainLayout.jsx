import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function MainLayout() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default MainLayout
