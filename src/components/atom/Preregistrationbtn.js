import React from 'react'
import styled from 'styled-components'

const Preregistrationbtn = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    width : 248px;
    height : 62px;
    border: solid 2px var(--black);
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`

export default Preregistrationbtn