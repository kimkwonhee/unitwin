import React from 'react'
import styled from 'styled-components'

const Videobtn = ({className, children}) => {
    return (
        <Wrapper
            className={className}
        >
           {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height : 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 0 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
    background-color: var(--turtle-green);
`

export default Videobtn