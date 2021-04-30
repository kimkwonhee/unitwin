import React from 'react'
import Menubar from './components/organism/Menubar'
import Home from './pages/_Home'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './components/organism/Footer'
import _PlenarySession from './pages/_PlenarySession'

const Globalstyles = createGlobalStyle`
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    
    :root {
    --black : #222222;
    --white : #ffffff;
    --brown-grey : #aaaaaa;
    --turtle-green : #83b949;
    --very-light-pink : #d0d0d0;
    --brownish-grey : #5f5f5f;
  }
`

const App = () => {
  return (
    <Wrapper>
      <Globalstyles />
      <Menubar />
      <Home />
      {/* <_PlenarySession /> */}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
`

export default App;
