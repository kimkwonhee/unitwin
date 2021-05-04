import React from 'react'
import styled from 'styled-components'

const Downloadbtn = ({className, down, children}) => {
    return (
        <>
            <PWrapper
                className={className}
                down={down}
            >
                <PText>{children}</PText>
            </PWrapper>

            <MWrapper
                className={className}
                down={down}
            >
            <MText>{children}</MText>
            </MWrapper>
        </>
        
    )
}
// PC
const PWrapper = styled.div`
    cursor: pointer;
    width : 146px;
    height : 36px;
    display : ${props => props.down ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: var(--turtle-green);
    
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
`

// Mobile
const MWrapper = styled.div`
    cursor: pointer;
    width : ${(props) => props.width || '60px'};
    height : 26px;
    display : ${props => props.videobtn ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: var(--turtle-green);
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MText = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: var(--white);
`
export default Downloadbtn