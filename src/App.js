import React from 'react'
import Menubar from './components/organism/Menubar'
import Weekly from './pages/_Weekly'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './components/organism/Footer'

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
      
      <Weekly />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`

export default App;
