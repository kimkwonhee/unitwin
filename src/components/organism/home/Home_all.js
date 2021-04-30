import React from 'react'
import styled from 'styled-components'

const Home_all = () => {
    return (
        <Wrapper>
            <DayArea>
                <DayBlock>
                    <DayText>05.24 Mon</DayText>
                </DayBlock>
                <DayBlock>
                    <DayText>05.25 Tue</DayText>
                </DayBlock>
                <DayBlock>
                    <DayText>05.26 Wed</DayText>
                </DayBlock>
            </DayArea>
            <Section>
                <ConTentsArea>
                    <MonSection1>
                        <Time>13:00~13:15</Time>
                        <Title>오프닝 공연</Title>
                        <Time>13:15~13:25</Time>
                        <Title>환영사 1~3</Title>
                        <Time>13:25~13:43</Time>
                        <Title>기조발제/축사 1</Title>
                        <Time>13:43~14:01</Time>
                        <Title>기조발제/축사 2</Title>
                        <Time>13:01~14:11</Time>
                        <Title>기조발제/축사 3</Title>
                        <Time>13:00~13:15</Time>
                        <Title>주제영상</Title>
                        <SubTitle>(모두의 목소리)</SubTitle>
                        <Move>이동하기 &#62;</Move>
                    </MonSection1>
                    <MonSection2 />
                </ConTentsArea>
                <ConTentsArea>
                    <TueSection1>
                        <Time>13:00~13:40</Time>
                        <Title>기조발제 1</Title>
                        <SubTitle>(문화예술교육 2.0의 다양성)</SubTitle>
                        <TueCharacter1>언스트 바그너</TueCharacter1>
                        <Move>이동하기 &#62;</Move>
                    </TueSection1>
                    <TueSection2>
                        <Time>13:40~15:25</Time>
                        <Title>세션 1</Title>
                        <SubTitle>(현장사례연구)</SubTitle>
                        <Phasis1>[모더레이터]</Phasis1>
                        <TueCharacter2>박신의</TueCharacter2>
                        <Phasis2>[발제자]</Phasis2>
                        <TueCharacter2>정용성, 이은수<br />김소원, 김수연, 이보람</TueCharacter2>
                        <Move>이동하기 &#62;</Move>
                    </TueSection2>
                    <TueSection3>
                        <LeftArea>
                            <Time>15:25~16:55</Time>
                            <Title>세션 2</Title>
                            <SubTitle>(예술치료)</SubTitle>
                            <Phasis1>[모더레이터]</Phasis1>
                            <TueCharacter2>글로리아 자파타</TueCharacter2>
                            <Phasis2>[발제자]</Phasis2>
                            <TueCharacter2>티나 쿠코,<br />엠시 베트만,<br />김채연,<br />산자크르스마노비츠타식</TueCharacter2>
                            <Move>이동하기 &#62;</Move>
                        </LeftArea>
                        <RightArea>
                            <Time>15:25~16:55</Time>
                            <Title>세션 3</Title>
                            <SubTitle>(사회적 & 문화적 포용)</SubTitle>
                            <Phasis1>[모더레이터]</Phasis1>
                            <TueCharacter2>네릴 제너렛</TueCharacter2>
                            <Phasis2>[발제자]</Phasis2>
                            <TueCharacter2>김태희, 샤를린 라헨드란<br />난 장, 야라 도크랏</TueCharacter2>
                            <Move>이동하기 &#62;</Move>
                        </RightArea>
                    </TueSection3>
                    <TueSection4>
                        <Time>16:55~18:10</Time>
                        <Title>세션 4</Title>
                        <SubTitle>(서울어젠다)</SubTitle>
                        <Phasis1>[모더레이터]</Phasis1>
                        <TueCharacter2>김인설</TueCharacter2>
                        <Phasis2>[발제자]</Phasis2>
                        <TueCharacter2>벤 볼든 & 네릴 제너렛<br />치후 룸&젠 터<br />캐서린 콜만 & 마크 셀크릭 & 에비 맥도날드</TueCharacter2>
                        <Move>이동하기 &#62;</Move>
                    </TueSection4>
                    <TueSection5>
                        <Time>16:55~18:10</Time>
                        <Title>BYOB</Title>
                        <SubTitle>(문화예술교육 2.0의 다양성)</SubTitle>
                        <Move>이동하기 &#62;</Move>
                    </TueSection5>
                    <TueSection6 />
                </ConTentsArea>
                <ConTentsArea>
                    <WedSection1>
                        <Time>13:00~13:40</Time>
                        <Title>기조발제 2</Title>
                        <SubTitle>(문화적 회복력과 미적 회복력)</SubTitle>
                        <TueCharacter1>벤야민 요리슨</TueCharacter1>
                        <Move>이동하기 &#62;</Move>
                    </WedSection1>
                    <WedSection2>
                        <Time>13:40~15:10</Time>
                        <Title>세션 5</Title>
                        <SubTitle>(교실 속의 예술)</SubTitle>
                        <Phasis1>[모더레이터]</Phasis1>
                        <TueCharacter2>벤 볼든</TueCharacter2>
                        <Phasis2>[발제자]</Phasis2>
                        <TueCharacter2>마리 클레어 키덴다<br />에밀리 맥밀런, 홍지혜<br />에밀리 윌슨 & 네릴 제너렛<br />벤야민 요리슨</TueCharacter2>
                        <Move>이동하기 &#62;</Move>
                    </WedSection2>
                    <WedSection3>
                        <LeftArea>
                            <Time>15:10~16:40</Time>
                            <Title>세션 6</Title>
                            <SubTitle>(예술참여)</SubTitle>
                            <Phasis1>[모더레이터]</Phasis1>
                            <TueCharacter2>신혜선</TueCharacter2>
                            <Phasis2>[발제자]</Phasis2>
                            <TueCharacter2>제환정<br />정혜연 & 성효진<br />레베카 칸 & 푸 세이밍 &<br />탄정수안 제프 풀린</TueCharacter2>
                            <Move>이동하기 &#62;</Move>
                        </LeftArea>
                        <RightArea>
                            <Time>15:10~16:40</Time>
                            <Title>세션 7</Title>
                            <SubTitle>(다양성 & 문화적 묘사)</SubTitle>
                            <Phasis1>[모더레이터]</Phasis1>
                            <TueCharacter2>치후 룸</TueCharacter2>
                            <Phasis2>[발제자]</Phasis2>
                            <TueCharacter2>루스 렌슬러, 심지영<br />김유리 & 박소정,<br />션 코코란 & 벤 볼든</TueCharacter2>
                            <Move>이동하기 &#62;</Move>
                        </RightArea>
                    </WedSection3>
                    <WedSection4>
                        <Time>16:40~18:25</Time>
                        <Title>세션 8</Title>
                        <SubTitle>(현장사례연구2))</SubTitle>
                        <Phasis1>[모더레이터]</Phasis1>
                        <TueCharacter2>장웅조</TueCharacter2>
                        <Phasis2>[발제자]</Phasis2>
                        <TueCharacter2>장수혜, 공윤지, 이현정<br />배성종, 최영희</TueCharacter2>
                        <Move>이동하기 &#62;</Move>
                    </WedSection4>
                    <WedSection5>
                        <Time>18:25~19:25</Time>
                        <Title>폐회 세션</Title>
                        <Move>이동하기 &#62;</Move>
                    </WedSection5>
                </ConTentsArea>
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    border : 1px solid var(--turtle-green);
    margin-bottom : 200px;
`

// Day
const DayArea = styled.div`
    display : flex;
    background-color: #f9fff4;
`
const DayBlock = styled.div`
    width : 100%;
    height : 68px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-right : 1px solid var(--turtle-green);
    &:last-child {
        border-right : none;
    }
`
const DayText = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--turtle-green);
`
const Section =styled.div`
    display : flex;
`
const ConTentsArea = styled.div`
    width : 400px;
`

const Time = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #222222;
    margin-top : none;
    
    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(7),
    &:nth-child(9),
    &:nth-child(11) {
        margin-top : 30px;
    }
`
const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #222222;
    margin-top : 4px;
`
const SubTitle = styled.div`
    font-size: 20px;
    color: var(--black);
`

const TueCharacter1 = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const TueCharacter2 = styled.div`
    margin-top : 8px;
    font-size: 16px;
    font-weight: bold;
    text-align : center;
    color: var(--black);
`
const Move = styled.div`
    cursor: pointer;
    margin-top : 40px;
    font-size: 16px;
    font-weight: 500;
    color: var(--turtle-green);
`
const Phasis1 = styled.div`
    margin-top : 40px;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
`
const Phasis2 = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
`

const LeftArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-right : 1px solid var(--turtle-green);
`
const RightArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`

// Section
// Mon
const MonSection1 = styled.div`
    height : 695px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-top : 1px solid var(--turtle-green);
    border-right : 1px solid var(--turtle-green);
`
const MonSection2 = styled.div`
    height : 1277px;
    background-color: #f9fff4;
    border-top : 1px solid var(--turtle-green);
    border-right : 1px solid var(--turtle-green);
`

// Tue
const TueSection1 = styled.div`
    height : 304px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const TueSection2 = styled.div`
    height : 500px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const TueSection3 = styled.div`
    height : 464px;
    display : flex;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const TueSection4 = styled.div`
    height : 434px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const TueSection5 = styled.div`
    height : 198px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const TueSection6 = styled.div`
    height : 68px;
    background-color: #f9fff4;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`


// Wed
const WedSection1 = styled.div`
    height : 304px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`
const WedSection2 = styled.div`
    height : 456px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`
const WedSection3 = styled.div`
    height : 464px;
    display : flex;
    border-top : 1px solid var(--turtle-green);
`
const WedSection4 = styled.div`
    height : 548px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`
const WedSection5 = styled.div`
    height : 197px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`

export default Home_all