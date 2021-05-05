import React from 'react'
import styled from 'styled-components'

const Langbtn = ({children, onClick, id, langstate}) => {
    console.log(onClick);
    return (
        <Wrapper 
            onClick={onClick}
            id={id}
            langstate={langstate}
        >
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
     color: ${props=> (props.id == props.langstate) ? 'var(--white)' : 'var(--brown-grey)'};
     background-color: ${props=> (props.id == props.langstate) ? 'var(--turtle-green)' : 'var(--white)'}
`

export default Langbtn