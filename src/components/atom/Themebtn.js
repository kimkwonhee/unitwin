import React from 'react'
import styled from 'styled-components'

const Themebtn = ({children, padding, onClick, selectedcatagory, value}) => {
    return (
        <Wrapper padding={padding} onClick={onClick} value={value} selectedcatagory={selectedcatagory}>
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding : 12px ${props=> props.padding || '20px'};
    border-radius: 40px;
    border: solid 1px var(--brown-grey);
    background-color: ${props => (props.selectedcatagory == props.value) ? 'var(--turtle-green)' : 'var(--white)'};
    margin-bottom : 13px;
    margin-right : 8px;
    cursor: pointer;
    color: ${props => (props.selectedcatagory == props.value) ? 'var(--white)' : 'var(--brown-grey);'}; 

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