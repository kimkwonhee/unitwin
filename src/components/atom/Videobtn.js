import React from 'react'
import styled from 'styled-components'

const Videobtn = ({className, width, children}) => {
    return (
        <Wrapper
            className={className}
            width={width}
        >
           {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : ${(props) => props.width || '92px'};
    height : 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
    background-color: var(--turtle-green);
`

export default Videobtn