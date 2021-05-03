import React from 'react'
import styled from 'styled-components'
import Videobtn from '../atom/Videobtn'

const Cal_TopArea = ({className, title, videobtn, width, time}) => {
    return (
        <>
            <PSection className={className}>
                <PTitleArea>
                    <PTitle>{title}</PTitle>
                    <PVideoAll 
                        videobtn={videobtn}
                        width={width}
                    >
                        전체영상보기
                    </PVideoAll>
                </PTitleArea>
                <PTime>{time}</PTime>
            </PSection>

            <MSection className={className}>
                <MTitleArea>
                    <MTitle>{title}</MTitle>
                    <MTime>{time}</MTime>
                </MTitleArea>
                <MVideoAll 
                        videobtn={videobtn}
                        width={width}
                    >
                        전체영상보기
                </MVideoAll>
            </MSection>
        </>
    )
}
// PC
const PSection = styled.div`
    display : flex;
    justify-content : space-between;
    border-top : 4px solid var(--black);
    border-bottom : 1px solid var(--black);
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
    color: var(--black);
    & {
        margin-right : 16px;
    }
`
const PVideoAll = styled(Videobtn)`
    margin-left : 150px;
`
const PTime = styled.div`
    padding-top : 24px;
    padding-bottom : 24px;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`

// Mobile
const MSection = styled.div`
    display : flex;
    justify-content : space-between;
    padding : 8px 12px;
    border-top : 2px solid var(--black);
    border-bottom : 1px solid var(--black);
    
    @media all and (min-width:1200px) {
        display : none;
    }
`

const MTitleArea = styled.div`

`
const MTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const MTime = styled.div`
    font-size: 14px;
    color: var(--black);
`
const MVideoAll = styled(Videobtn)`
`

export default Cal_TopArea