import React from 'react'
import styled from 'styled-components'

const Menubtn = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 138px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
    /* background : purple; */
`
export default Menubtn