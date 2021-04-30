import React from 'react'
import styled from 'styled-components'

const Langbtn = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
     width : 48px;
     height : 26px;
     display : flex;
     justify-content : center;
     align-items : center;
     border: solid 0.5px var(--turtle-green);
     font-size: 12px;
     font-weight: bold;
     color: var(--brown-grey);
`

export default Langbtn