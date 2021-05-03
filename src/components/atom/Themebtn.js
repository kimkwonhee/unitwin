import React from 'react'
import styled from 'styled-components'

const Themebtn = ({children, padding}) => {
    return (
        <Wrapper padding={padding}>
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding : 12px ${props=> props.padding || '20px'};
    border-radius: 40px;
    border: solid 1px var(--brown-grey);
    background-color: var(--white);
    margin-bottom : 13px;
    margin-right : 8px;
    cursor: pointer;
    color: var(--brown-grey);

    &:hover {
        background-color: var(--turtle-green);
        color: var(--white);
    }
`

const Text = styled.div`
    font-size: 12px;
    font-weight: bold;
    
`

export default Themebtn