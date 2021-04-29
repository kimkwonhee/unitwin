import React from 'react'
import styled from 'styled-components'

const Home_all = () => {
    return (
        <Wrapper>
            <ConTentsArea>
                <DayBlock>
                    <DayText>05.24 Mon</DayText>
                </DayBlock>
                <MonSection1>
                    <StartMonTime1>13:00~13:15</StartMonTime1>
                    <MonTitle>오프닝 공연</MonTitle>
                    <MonTime>13:15~13:25</MonTime>
                    <MonTitle>환영사 1~3</MonTitle>
                    <MonTime>13:25~13:43</MonTime>
                    <MonTitle>기조발제/축사 1</MonTitle>
                    <MonTime>13:43~14:01</MonTime>
                    <MonTitle>기조발제/축사 2</MonTitle>
                    <MonTime>13:01~14:11</MonTime>
                    <MonTitle>기조발제/축사 3</MonTitle>
                    <MonTime>13:00~13:15</MonTime>
                    <MonSubTitle>주제영상</MonSubTitle>
                    <MonSub>(모두의 목소리)</MonSub>
                    <Move>이동하기 &#62;</Move>
                </MonSection1>
                <MonSection2 />
            </ConTentsArea>
            <ConTentsArea>
                <DayBlock>
                    <DayText>05.25 Tue</DayText>
                </DayBlock>
                <TueSection1>
                    <StartTueTime1>13:00~13:40</StartTueTime1>
                    <TueSubTitle>기조발제 1</TueSubTitle>
                    <TueSub>(문화예술교육 2.0의 다양성)</TueSub>
                    <TueCharacter1>언스트 바그너</TueCharacter1>
                    <Move>이동하기 &#62;</Move>
                </TueSection1>
                <TueSection2>
                    <StartTueTime2>13:40~15:25</StartTueTime2>
                    <TueSubTitle>세션 1</TueSubTitle>
                    <TueSub>(현장사례연구)</TueSub>
                    <Phasis1>[모더레이터]</Phasis1>
                    <TueCharacter2>박신의</TueCharacter2>
                    <Phasis2>[발제자]</Phasis2>
                    <TueCharacter2>정용성, 이은수<br />김소원, 김수연, 이보람</TueCharacter2>
                    <Move>이동하기 &#62;</Move>
                </TueSection2>
                <TueSection3>
                    <TueLeftArea>
                        <StartTueTime3>15:25~16:55</StartTueTime3>
                        <TueSubTitle>세션 2</TueSubTitle>
                        <TueSub>(예술치료)</TueSub>
                        <Phasis1>[모더레이터]</Phasis1>
                        <TueCharacter2>글로리아 자파타</TueCharacter2>
                        <Phasis2>[발제자]</Phasis2>
                        <TueCharacter2>티나 쿠코,<br />엠시 베트만,<br />김채연,<br />산자크르스마노비츠타식</TueCharacter2>
                        <Move>이동하기 &#62;</Move>
                    </TueLeftArea>
                    <TueRightArea>
                        <StartTueTime4>15:25~16:55</StartTueTime4>
                        <TueSubTitle>세션 3</TueSubTitle>
                        <TueSub>(사회적 & 문화적 포용)</TueSub>
                        <Phasis1>[모더레이터]</Phasis1>
                        <TueCharacter2>네릴 제너렛</TueCharacter2>
                        <Phasis2>[발제자]</Phasis2>
                        <TueCharacter2>김태희, 샤를린 라헨드란<br />난 장, 야라 도크랏</TueCharacter2>
                        <Move>이동하기 &#62;</Move>
                    </TueRightArea>
                </TueSection3>
                <TueSection4>
                    <StartTueTime5>16:55~18:10</StartTueTime5>
                    <TueSubTitle>세션 4</TueSubTitle>
                    <TueSub>(서울어젠다)</TueSub>
                    <Phasis1>[모더레이터]</Phasis1>
                    <TueCharacter2>김인설</TueCharacter2>
                    <Phasis2>[발제자]</Phasis2>
                    <TueCharacter2>벤 볼든 & 네릴 제너렛<br />치후 룸&젠 터<br />캐서린 콜만 & 마크 셀크릭 & 에비 맥도날드</TueCharacter2>
                    <Move>이동하기 &#62;</Move>
                </TueSection4>
                <TueSection5>
                    <StartTueTime6>16:55~18:10</StartTueTime6>
                    <TueSubTitle>BYOB</TueSubTitle>
                    <TueSub>(문화예술교육 2.0의 다양성)</TueSub>
                    <Move>이동하기 &#62;</Move>
                </TueSection5>
                <TueSection6 />



            </ConTentsArea>
            <ConTentsArea>
                <DayBlock>
                    <DayText>05.26 Wed</DayText>
                </DayBlock>
            </ConTentsArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    /* height : 1200px; */
    border : 1px solid #83b949;
    display : flex;
    margin-bottom : 200px;
`

const ConTentsArea = styled.div`
    width : 400px;
    height : 100%;
    border-right : 1px solid #83b949;
    &:last-child {
        border-right : none;;
    }
`

// Day
const DayBlock = styled.div`
    width : 100%;
    height : 68px;
    border-bottom : 1px solid #83b949;
    /* border-right : 1px solid #83b949; */
    background-color: #f9fff4;
    display : flex;
    justify-content : center;
    align-items : center;

`
const DayText = styled.div`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.25;
    color: #83b949;
`

// Mon Section1
const MonSection1 = styled.div`
    height : 695px;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-bottom : 1px solid #83b949;
`
const StartMonTime1 = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin : 60px 0 4px 0px;
`
const MonTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    color: #222222;
    margin-bottom : 30px;

    &:last-child {
        margin-bottom : 40px;
    }
`
const MonTime = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin-bottom : 4px;
`
const MonSection2 = styled.div`
    height : 1274px;
    background-color: #f9fff4;
`
const MonSubTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    color: #222222;
`
const MonSub = styled.div`
    font-size: 20px;
    line-height: 1.5;
    color: #222222;
`


// Tue Section 1
const TueSection1 = styled.div`
    height : 304px;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* border-right : 1px solid #83b949; */
    border-bottom : 1px solid #83b949;
`
const StartTueTime1 = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin : 55px 0 4px 0px;
`
const TueCharacter1 = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: #222222;
`
const TueSubTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    color: #222222;
`
const TueSub = styled.div`
    font-size: 20px;
    line-height: 1.5;
    color: #222222;
`

// Tue Section 2
const TueSection2 = styled.div`
    height : 500px;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* border-right : 1px solid #83b949; */
    border-bottom : 1px solid #83b949;
`
const StartTueTime2 = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin : 77px 0 4px 0px;
`
const TueCharacter2 = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    text-align : center;
    color: #222222;
`

// Tue Section 3
const TueSection3 = styled.div`
    width : 100%;
    height : 464px;
    display : flex;
    /* border-right : 1px solid #83b949; */
    border-bottom : 1px solid #83b949;
`
const TueLeftArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-right : 1px solid #83b949;
`
const TueRightArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
`
const StartTueTime3 = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin : 35px 0 4px 0px;
`
const StartTueTime4 = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin : 59px 0 4px 0px;
`

// Tue Section 4
const TueSection4 = styled.div`
    height : 434px;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* border-right : 1px solid #83b949; */
    border-bottom : 1px solid #83b949;
`
const StartTueTime5 = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin : 32px 0 4px 0px;
`
// Tue Section 5
const TueSection5 = styled.div`
    height : 198px;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* border-right : 1px solid #83b949; */
    border-bottom : 1px solid #83b949;
`

const StartTueTime6 = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    margin : 24px 0 4px 0px;
`
const TueSection6 = styled.div`
    height : 65px;
    background-color: #f9fff4;
`



const Phasis1 = styled.div`
    margin : 40px 0 8px 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: #83b949;
`
const Phasis2 = styled.div`
    margin : 20px 0 8px 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: #83b949;
`

const Move = styled.div`
    cursor: pointer;
    margin-top : 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #83b949;
`

export default Home_all