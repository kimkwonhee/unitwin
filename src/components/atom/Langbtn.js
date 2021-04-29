import React from 'react'
import styled from 'styled-components'

const Langbtn = ({children}) => {
    return (
        <Wrapper>
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
     width : 48px;
     height : 26px;
     display : flex;
     justify-content : center;
     align-items : center;
     border: solid 0.5px #83b949;
`

const Text = styled.div`
    font-size: 12px;
    font-weight: bold;
    line-height: 1.5;
    color: #aaaaaa;
`

export default Langbtn