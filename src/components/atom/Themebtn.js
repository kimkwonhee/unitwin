import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Themebtn = ({children, padding, onClick, selectedcatagory, value, className}) => {
    return (
        <Wrapper padding={padding} onClick={onClick} value={value} selectedcatagory={selectedcatagory} className={className}>
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding : 12px ${props=> props.padding || '20px'};
    border-radius: 40px;
    border: solid 1px ${color.brown_grey};
    background-color: ${props => (props.selectedcatagory === props.value) ? color.turtle_green : color.white};
    margin-bottom : 13px;
    margin-right : 8px;
    cursor: pointer;
    color: ${props => (props.selectedcatagory === props.value) ? color.white : color.brown_grey}; 

    &:hover {
        background-color: ${color.turtle_green};
        color: ${color.white};
    }
`

const Text = styled.div`
    font-size: 12px;
    font-weight: bold;
    
`

export default Themebtn