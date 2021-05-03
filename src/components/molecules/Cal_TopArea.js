import React from 'react'
import styled from 'styled-components'
import Videobtn from '../atom/Videobtn'

const Cal_TopArea = ({className,title, videobtn, width, time}) => {
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
        </>
    )
}

const PSection = styled.div`
    display : flex;
    justify-content : space-between;
    border-top : 4px solid var(--black);
    border-bottom : 1px solid var(--black);
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
    margin-left : 100px;
`

const PTime = styled.div`
    padding-top : 24px;
    padding-bottom : 24px;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`

export default Cal_TopArea