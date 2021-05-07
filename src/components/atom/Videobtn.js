import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Videobtn = ({className, width, videobtn, children}) => {
    return (
        <>
            <PWrapper
                className={className}
                width={width}
                videobtn={videobtn}
            >
                <PText>{children}</PText>
            </PWrapper>

            <MWrapper
                className={className}
                width={width}
                videobtn={videobtn}
            >
            <MText>{children}</MText>
            </MWrapper>
        </>
        
    )
}
// PC
const PWrapper = styled.div`
    cursor: pointer;
    width : ${(props) => props.width || '92px'};
    height : 36px;
    display : ${props => props.videobtn ? 'flex' : 'none'};
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
const MWrapper = styled.div`
    cursor: pointer;
    width : ${(props) => props.width || '60px'};
    height : 26px;
    display : ${props => props.videobtn ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MText = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: ${color.white};
`
export default Videobtn