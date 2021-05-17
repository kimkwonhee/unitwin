import React, {useEffect} from 'react'
import styled from 'styled-components'
import Home_center from '../components/organism/home/Home_center'
import Home_top from '../components/organism/home/Home_top'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'

const _Home = () => {

    useEffect(() => {
        const gaSetting = async () => {
            await ReactGA.initialize('G-8BW0WPEKCF')
            await ReactGA.set({
                page: window.location.pathname + window.location.search
            })
            await ReactGA.pageview(window.location.pathname + window.location.search)
        }
        gaSetting()
        window.scrollTo(0,0);
        
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