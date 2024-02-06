import './globals.sass'

import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
     <div>
      <Navbar/>
      <h1>portfolio</h1>
      <Outlet />
      <p>footer</p>
     </div>
    </>
  )
}

export default App
