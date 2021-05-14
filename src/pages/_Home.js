import React, {useEffect} from 'react'
import styled from 'styled-components'
import Home_center from '../components/organism/home/Home_center'
import Home_top from '../components/organism/home/Home_top'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'

const _Home = () => {

    useEffect(() => {
        window.scrollTo(0,0);
        ReactGA.pageview(window.location.pathname + window.location.search)
        console.log(window.location.pathname + window.location.search)
    }, []);

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))
    
    return (
        <Wrapper>
            <Home_top curlang={curlang} />
            <Home_center curlang={curlang} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height : 100%;
`

export default _Home