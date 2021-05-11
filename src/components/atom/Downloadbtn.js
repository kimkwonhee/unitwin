import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Downloadbtn = ({className, down, children, downlink}) => {
    return (
        <>
            <PWrapper
                className={className}
                down={down}
                href={downlink}
                download
                target="_blank"
            >
                <PText>{children}</PText>
            </PWrapper>

            <MWrapper
                className={className}
                down={down}
                href={downlink}
                download
                target="_blank"
            >
            <MText>{children}</MText>
            </MWrapper>
        </>
        
    )
}
// PC
const PWrapper = styled.a`
    cursor: pointer;
    width : 146px;
    height : 36px;
    display : ${props => props.down ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
    transition: .6s;
    &:hover {
        opacity: 0.8;
    }

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
    width : 146px;
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