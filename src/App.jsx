import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterPage from './Items/Footer'
import NavBar from './items/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main-content'>
    <div className="w-[100vw] h-[100vh]  min-vh-100 relative bg-[#f7d6ad]">
      <section className="position-relative d-flex flex-column justify-content-center align-items-center text-white text-center min-vh-100"></section>
        <div className="position-absolute top-0 w-100 bg-[#d1aa79]">
          <NavBar />
        </div>
        <div className="position-absolute top-0 w-100 m-auto">
        <img className="w-[283px] h-[272px]  " src="./bell.png" />
        {/* <div className="row align-items-center"> */}
        {/* <img className="w-[100%] h-[100%] left-0 top-0 absolute p-10" src="./questBoard.png" /> */}
        
        <img className="w-[350px] h-[467px]  " src="./quest1.png" />
        <img className="w-[350px] h-[467px]  " src="./quest2.png" />
        <img className="w-[350px] h-[467px]  " src="./quest3.png" />
        <img className="w-[350px] h-[467px]  " src="./quest4.png" />
        </div>
      {/* </div> */}
      <section/>
      <FooterPage />
    </div>
    </div>
  
    </>
  )
}

export default App
