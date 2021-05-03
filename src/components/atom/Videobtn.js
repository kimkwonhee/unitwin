import React from 'react'
import styled from 'styled-components'

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
    display : ${props => props.videobtn ? 'flex' : 'none'} !important;
    justify-content : center;
    align-items : center;
    background-color: var(--turtle-green);
    
    @media all and (max-width:1199px) {
        display : none !important;
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
    display : ${props => props.videobtn ? 'flex' : 'none'} !important;
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



export default Videobtn