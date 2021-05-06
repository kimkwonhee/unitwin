import React from 'react'
import styled from 'styled-components'

const mobileviewbtn = ({className, id, status, onClick , children}) => {
    return (
        <Wrpper className={className} status={status} id={id} onClick={onClick}>
            <Text>{children}</Text>
        </Wrpper>
    )
}

const Wrpper = styled.div`
    width : 100%;
    height : 48px;
    display : flex;
    justify-content : center;
    align-items : center;
    color: ${props=>(props.id == props.status) ? 'var(--white)' : 'var(--brown-grey)'};
    background : ${props=>(props.id == props.status) ? 'var(--black)' : 'var(--white)'};
    border: solid 1px var(--brown-grey);
`
const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
`

export default mobileviewbtn;