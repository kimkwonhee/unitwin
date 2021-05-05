import React from 'react'
import styled from 'styled-components'

const Langbtn = ({children, onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
     width : 100%;
     height : 2.68vh;
     display : flex;
     justify-content : center;
     align-items : center;
     border: solid 0.5px var(--turtle-green);
     font-size: 0.75rem;
     font-weight: bold;
     color: var(--brown-grey);
`

export default Langbtn