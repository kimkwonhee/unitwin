import React from 'react'
import styled from 'styled-components'
import Videobtn from '../atom/Videobtn'
import color from '../../style/color'
import { useSelector } from 'react-redux'

const Cal_TopArea = ({className, title, videobtn, width, time, link, videotext }) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    
    return (
        <>
            {/* PC */}
            <PSection className={className}>
                <PTitleArea>
                    <PTitle>{title}</PTitle>
                    <PVideoAll 
                        videobtn={videobtn}
                        width={width}
                        link={link}
                        videotext={videotext}
                    />
                </PTitleArea>
                <PTime>{time}</PTime>
            </PSection>

            {/* Mobile */}
            <MSection className={className}>
                <MTitleArea>
                    <MTitle>{title}</MTitle>
                    <MTime>{time}</MTime>
                </MTitleArea>
                <MVideoAll 
                       videobtn={videobtn}
                       width={width}
                       link={link}
                       videotext={videotext}
                    >
                </MVideoAll>
            </MSection>
        </>
    )
}
// PC
const PSection = styled.div`
    display : flex;
    justify-content : space-between;
    border-top : 4px solid ${color.black};
    border-bottom : 1px solid ${color.black};
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PTitleArea = styled.div`
    padding-top : 24px;
    padding-bottom : 24px;
    display : flex;
`
const PTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    white-space : pre-line;
    color: ${color.black};
    & {
        margin-right : 16px;
    }
`
const PVideoAll = styled(Videobtn)`
    margin-left : 20px;
`
const PTime = styled.div`
    padding-top : 24px;
    padding-bottom : 24px;
    font-size: 20px;
    font-weight: bold;
    color: ${color.black};
`

// Mobile
const MSection = styled.div`
    display : flex;
    justify-content : space-between;
    padding : 8px 12px;
    border-top : 2px solid ${color.black};
    border-bottom : 1px solid ${color.black};
    
    @media all and (min-width:1200px) {
        display : none;
    }
`

const MTitleArea = styled.div`
`
const MTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    white-space : pre-line;
    color: ${color.black};
`
const MTime = styled.div`
    font-size: 14px;
    color: ${color.black};
`
const MVideoAll = styled(Videobtn)`
`

export default Cal_TopArea