import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Menubtn = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    width : 138px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 1em;
    font-weight: bold;
    color: ${color.black};
    
    &:hover {
        border-bottom : 2px solid ${color.turtle_green};
        color : ${color.turtle_green};
    }
`
export default Menubtn