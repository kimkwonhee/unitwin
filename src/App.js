import React from 'react'
import Menubar from './components/organism/Menubar'
import Home from './pages/_Home'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './components/organism/Footer'
import _Presentation from './pages/_Presentation'

const Globalstyles = createGlobalStyle`
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
`

const App = () => {
  return (
    <Wrapper>
      <Globalstyles />
      <Menubar />
      <Home />
      {/* <_Presentation /> */}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100%;
`

export default App;
