import React from 'react'
import styled from 'styled-components'
import Home_center from '../components/organism/home/Home_center'
import Home_top from '../components/organism/home/Home_top'

const _Home = () => {
    return (
        <Wrapper>
            <Home_top />
            <Home_center />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height : 100%;
`

export default _Home