import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function MainLayout() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default MainLayout
