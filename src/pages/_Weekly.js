import React from 'react'
import styled from 'styled-components'
import Weekly_center from '../components/organism/weekly/Weekly_center'
import Weekly_top from '../components/organism/weekly/Weekly_top'

const _Weekly = () => {
    return (
        <Wrapper>
            <Weekly_top />
            <Weekly_center />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    /* background : grey; */
`

export default _Weekly