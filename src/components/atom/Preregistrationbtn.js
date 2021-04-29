import React from 'react'
import styled from 'styled-components'

const Preregistrationbtn = ({children}) => {
    return (
        <Wrapper>
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    width : 248px;
    height : 62px;
    border: solid 2px #222222;
    display : flex;
    justify-content : center;
    align-items : center;
`

const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    color: #222222;
`

export default Preregistrationbtn