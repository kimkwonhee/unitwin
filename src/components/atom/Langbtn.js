import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Langbtn = ({children, onClick, id, langstate}) => {
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
     border: solid 0.5px ${color.turtle_green};
     font-size: 0.75rem;
     font-weight: bold;
     color: ${props=> (props.id === props.langstate) ? color.white : color.brownish_grey};
     background-color: ${props=> (props.id === props.langstate) ? color.turtle_green : color.white}
`

export default Langbtn