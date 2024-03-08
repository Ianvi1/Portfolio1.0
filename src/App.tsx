import './globals.sass'

import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
     <div>
      <Navbar/>
      <Outlet />
      <p>footer</p>
     </div>
    </>
  )
}

export default App
