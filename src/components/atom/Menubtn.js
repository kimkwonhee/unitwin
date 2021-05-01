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
    cursor: pointer;
    width : 7.18vw;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 1em;
    font-weight: bold;
    color: var(--black);
    
    &:hover {
        border-bottom : 2px solid var(--turtle-green);
        color : var(--turtle-green);
    }
`
export default Menubtn