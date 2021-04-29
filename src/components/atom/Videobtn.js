import React from 'react'
import styled from 'styled-components'

const Videobtn = ({className, children}) => {
    return (
        <Wrapper
            className={className}
        >
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height : 36px;
    padding : 0px 20px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: #83b949;
`

const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    color: #ffffff;
`

export default Videobtn