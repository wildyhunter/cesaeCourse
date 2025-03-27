import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import style from './App.module.css'

function App() {
  return(
    <div className={style.app}>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
