import { Routes, Route } from 'react-router-dom'
import LoginView from './views/Login'
import ProtectedView from './components/ProtectedView'
import MainLayout from './components/MainLayout'
import Home from './views/Home'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <ProtectedView>
              <Home />
            </ProtectedView>
          }
        />
      </Route>
      <Route path="/login" element={<LoginView />} />
    </Routes>
  )
}

export default App
