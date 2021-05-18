import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'
import { useSelector } from 'react-redux'
import downloadimg from '../../images/download_img2.png'

const Downloadbtn2 = ({className, down, children, downlink}) => {
    
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
                <PImg src={downloadimg} alt="download"/>
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
                <MImg src={downloadimg} alt="download"/>
            </MWrapper>
        </>
        
    )
}
// PC
const PWrapper = styled.a`
    cursor: pointer;
    width : ${props => (props.status === 'kr') ? '168px' : '122px'};
    height : 36px;
    display : ${props => props.down ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    border: solid 1px ${color.turtle_green};
    transition : .6s;
    &:hover {
        opacity : 0.8;
    }

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PText = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-right : 8px;
    color: ${color.turtle_green};
`
const PImg = styled.img`
    width : 16px;
    height : 20px;
`

// Mobile
const MWrapper = styled.a`
    ${props => props.href ==='' ? 'pointer-events: none' : 'cursor: pointer' };
    width : ${props => (props.status === 'kr') ? '168px' : '122px'};
    height : 36px;
    display : ${props => props.down ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    border: solid 1px ${color.turtle_green};
    background-color : ${color.white};
    /* background-color: ${props => props.href ==='' ? color.white : color.turtle_green }; */
    margin-bottom : ${props => props.href ==='' ? null : '60px' };

    &:last-child {
        margin-bottom : 0px;
    }
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MText = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: ${color.turtle_green};
    margin-right : 8px;
`

const MImg = styled.img`
    width : 16px;
    height : 20px;
`
export default Downloadbtn2