import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

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
    color: ${props=>(props.id == props.status) ? color.white : color.brown_grey};
    background : ${props=>(props.id == props.status) ? color.black : color.white};
    border: solid 1px ${color.brown_grey};
`
const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
`

export default mobileviewbtn;