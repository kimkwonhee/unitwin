import React from 'react'
import styled from 'styled-components'


const DetailTopMO = () => {

    return (
        <Wrapper>
            <TitleArea>
                <Line />
                <Title1>세션5</Title1>
                <Title2>교실속의 예술</Title2>
                <TimeArea>05.26(수) 13:40~15:15</TimeArea>
            </TitleArea>
            <VideoWrapper>
                <VideoArea>
                    영상 영역
                </VideoArea>
            </VideoWrapper>
            <ContentWrapper>
                <ContentTabArea>
                    <ContentTab>
                        강연 설명
                    </ContentTab>
                    <ContentTab>
                        실시간 채팅
                    </ContentTab>
                </ContentTabArea>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
    padding: 100px 0 40px 0;
`

const TitleArea = styled.div`
    width: 100%;
    margin: 0 16px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
`

const Line = styled.div`
    width: 80px;
    height: 2px;
    background-color: var(--black);
    margin-bottom: 8px;
`

const Title1 = styled.h3`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
    margin-bottom: 8px;
`

const Title2 = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: var(--turtle-green);
    margin-bottom: 2px;
`

const TimeArea = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: var(--black);
    margin-bottom: 0;
`
const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 56.26%;
`

const VideoArea = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    background-color: #aaa;
    margin-bottom: 8px;
`

const ContentWrapper = styled.div`
    width: 100%;
`

const ContentTabArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const ContentTab = styled.div`
    flex: 1;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.selected ? 'var(--white)' : 'var(--brown-grey)'};
    border: ${props => props.selected ? '1px solid var(--black)' : '1px solid var(--brown-grey)'};
`

export default DetailTopMO