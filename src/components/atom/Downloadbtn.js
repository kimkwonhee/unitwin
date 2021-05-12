import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'
import { useSelector } from 'react-redux'

const Downloadbtn = ({className, down, children, downlink}) => {
    
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    let langstatus = curlang.status

    return (
        <>
            <PWrapper
                className={className}
                down={down}
                href={downlink}
                download
                target="_blank"
                status={langstatus}
            >
                <PText>{children}</PText>
            </PWrapper>

            <MWrapper
                className={className}
                down={down}
                href={downlink}
                download
                target="_blank"
                status={langstatus}
            >
                <MText>{children}</MText>
            </MWrapper>
        </>
        
    )
}
// PC
const PWrapper = styled.a`
    cursor: pointer;
    width : ${props => (props.status === 'kr') ? '146px' : '220px'};
    height : 36px;
    display : ${props => props.down ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.white};
`

// Mobile
const MWrapper = styled.a`
    cursor: pointer;
    width : ${props => (props.status === 'kr') ? '146px' : '220px'};
    height : 36px;
    display : ${props => props.down ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.white};
`
export default Downloadbtn