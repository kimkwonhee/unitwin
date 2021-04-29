import React from 'react'
import styled from 'styled-components'

const Menubtn = ({children}) => {
    return (
        <Wrapper >
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 138px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    /* background : purple; */
`

const Text = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: #222222;
`

export default Menubtn