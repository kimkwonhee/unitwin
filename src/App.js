import React from 'react'
import Menubar from './components/organism/Menubar'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import _Home from './pages/_Home'
import _PlenarySession from './pages/_PlenarySession'
import _Session from './pages/_Session'
import _PreShowcase from './pages/_PreShowcase'
import _Byob from './pages/_Byob'
import _Closing from './pages/_Closing'
import Footer from './components/organism/Footer'
import Pl_Detail from './components/organism/plenarysession/Pl_Detail'
import Se_Detail from './components/organism/session/Se_Detail'
import Pr_Detail from './components/organism/preshowcase/Pr_Detail'
import 'antd/dist/antd.css'
import { useSelector } from 'react-redux'

const Globalstyles = createGlobalStyle`

    html, body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size : 16px;
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
  const { curlang, langkr, langen } = useSelector(state => ({
    curlang : state.changlang.curlang,
    langkr : state.changlang.langkr,
    langen : state.changlang.langen
  }))

  return (
    <Wrapper>
      <Globalstyles />
      <Menubar curlang={curlang} langkr={langkr} langen={langen}/>
      <Switch>
        <Route path="/2021/unitwin2021/home" component={_Home} exact/>
        <Route path="/2021/unitwin2021/plenary-session/:detail" component={Pl_Detail}/>
        <Route path="/2021/unitwin2021/plenary-session" component={_PlenarySession}/>
        <Route path="/2021/unitwin2021/session/:se_detail" component={Se_Detail}/>
        <Route path="/2021/unitwin2021/session" component={_Session}/>
        <Route path="/2021/unitwin2021/presession-showcase/:pr_detail" component={Pr_Detail}/>
        <Route path="/2021/unitwin2021/presession-showcase" component={_PreShowcase}/>
        <Route path="/2021/unitwin2021/byob" component={_Byob}/>
        <Route path="/2021/unitwin2021/closing-ceremony" component={_Closing}/>
      </Switch>
      <Footer curlang={curlang} langkr={langkr} langen={langen}/>
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
