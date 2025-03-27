import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header/Header'
import style from './App.module.css'
import Footer from './components/layout/Footer/Footer'

function App() {
  return(
    <div className={style.app}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
