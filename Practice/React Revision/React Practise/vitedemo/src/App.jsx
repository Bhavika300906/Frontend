import React from 'react'
import ClassCompo from './Compnent/ClassCompo'
import FunCompo from './Compnent/FunCompo'
import Css from './CSS/Css'
import FunProps from './Props/FunProps'
import FunProps2 from './Props/FunProps2'
import ClassProps from './Props/CLassProps'
import ClassProps2 from './Props/ClassProps2'
import MainState from './State/mainState'


function App() {


  return (
    <div>
      <h1>
        This is App Page
      </h1>
      {/* <ClassCompo /> */}
      {/* <FunCompo /> */}

      {/* CSS */}
      {/* <Css/> */}

      {/* Props */}
      {/* <FunProps name="Bhavika" age={20} /> */}
      {/* <FunProps2 img={"https://i.pinimg.com/1200x/9b/bd/10/9bbd10ee1b14a2fffa76ef2865b235ad.jpg"} title="SUGA" text="SUGA from BTS"/> */}

      {/* <ClassProps username ={"Bhavika3009"} /> */}
      {/* <ClassProps2 img={"https://i.pinimg.com/736x/f3/7c/a5/f37ca5f7c05a73115a32924ac8577a94.jpg"} title="Yoongi" text="Producer"/> */}

      <MainState />

    </div>
  )
}

export default App
