import React from 'react'
import styled from 'styled-components'
import Videobtn from '../../atom/Videobtn'

const Home_day1 = () => {
    return (
        <Wrapper>
            <TopSection>
                <TitleArea>
                    <Title>Day 1.</Title>
                    <Title>주간행사</Title>
                    <VideoAll>전체영상보기</VideoAll>
                </TitleArea>
                <Time>13:00~14:19</Time>
            </TopSection>
            <Section>
                <LeftInner>
                    <LeftTitle>오프닝 공연</LeftTitle>
                    <LeftTime>13:00~13:15</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightName>차진엽</RightName>
                        <RightJop>- 현대무용가 / 콜렉티브 에이</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>환영사</LeftTitle>
                    <LeftTime>13:15~13:25</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightName>황희</RightName>
                        <RightJop>- 문화체육관광부 장관</RightJop>
                        <RightName>박신의</RightName>
                        <RightJop>- 한국문화예술교육진흥원 이사장</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>기조발제 1</LeftTitle>
                    <LeftTime>13:25~13:40</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightTitle>지속가능한 예술생태계 구축을 통한 선제적 위기 대처: 성북 ‘예술순환로’ 프로젝트 사례 중심</RightTitle>
                        <RightName>하인츠 데우저 <RightEnName>(Heinz Deuser)</RightEnName></RightName>
                        <RightJop>- 예술치유분야 교수/연구소장</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>축사</LeftTitle>
                    <LeftTime>13:40~13:43</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightName>오드리 아즐레 <RightEnName>(Audrey Azoulay)</RightEnName></RightName>
                        <RightJop>- 유네스코 사무총장</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>기조발제 2</LeftTitle>
                    <LeftTime>13:43~13:58</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightTitle>펜데믹 시기, 예술의 변화</RightTitle>
                        <RightName>피터 셀라스 <RightEnName>(Peter Sellars)</RightEnName></RightName>
                        <RightJop>- 극 감독/ UCLA 교수</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>축사</LeftTitle>
                    <LeftTime>13:58~14:01</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightName>래리 오페럴 <RightEnName>(Lary O’ Farrell)</RightEnName></RightName>
                        <RightJop>- 유니트윈 명예회원</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>기조발제 3</LeftTitle>
                    <LeftTime>14:01~14:11</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightTitle>펜데믹 시기, 예술의 변화</RightTitle>
                        <RightName>요조</RightName>
                        <RightJop>- 싱어송라이터, 작가</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>축사</LeftTitle>
                    <LeftTime>14:11~14:14</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightName>로빈 파스코 <RightEnName>(Robin Pascoe)</RightEnName></RightName>
                        <RightJop>- 세계예술교육연맹 회장</RightJop>
                    </RightInner>
                </Right>
            </Section>
            <Section>
                <LeftInner>
                    <LeftTitle>Trailer</LeftTitle>
                    <LeftTime>14:14~14:19</LeftTime>
                </LeftInner>
                <Right>
                    <RightInner>
                        <RightTitle>주제영상&nbsp;&#60;모두의 목소리&#62;</RightTitle>
                    </RightInner>
                </Right>
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
`
const TopSection = styled.div`
    display : flex;
    justify-content : space-between;
    border-top : 4px solid var(--black);
    border-bottom : 1px solid var(--black);
`
const TitleArea = styled.div`
    padding-top : 24px;
    padding-bottom : 24px;
    display : flex;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--black);
    & {
        margin-right : 16px;
    }
`

const VideoAll = styled(Videobtn)`
    margin-left : 100px;
`

const Time = styled.div`
    padding-top : 24px;
    padding-bottom : 24px;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`

const Section = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    border-bottom : 1px solid var(--turtle-green);

    &:last-child {
        margin-bottom : 200px;
        border-bottom : none;
    }
`
// left
const LeftInner = styled.div`
    width : 282px;
    height : auto;
    margin-top : 40px;
    margin-right : 24px;
    padding-left : 40px;
`
const LeftTitle = styled.div`
    font-size: 28px;
    font-weight: 900;
    color: var(--black);
`

const LeftSubject = styled.div`
    margin-top : 40px;
    font-size: 20px;
    font-weight: bold;
    color: var(--turtle-green);
`

const LeftTime = styled.div`
    margin-top : 4px;
    margin-bottom : 40px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`

const LeftVideo = styled(Videobtn)`
    cursor: pointer;
    width : 60px;
    margin-top : 40px;
    margin-bottom : 47px;
`

// Right
const RightInner = styled.div`
    margin-top : 40px;
    border-bottom : 1px solid var(--very-light-pink);

    &:last-child {
        border-bottom : none;
    }
`
const Right = styled.div`
    width : 100%;
    margin-left : 18px;
    display : block;
`
const RightTitle = styled.div`
     font-size: 20px;
     font-weight: bold;
     color: var(--black);
     margin-bottom : 42px;
`
const RightModer = styled.div`
    margin-top : 40px;
    margin-bottom : 8px;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
`
const RightName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
    margin-bottom : 8px;
`
const RightEnName = styled.span`
    font-size: 14px;
    line-height: 1.57;
    color: var(--brown-grey);
`
const RightJop = styled.div`
    margin-bottom : 40px;
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
`


export default Home_day1