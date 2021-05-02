import React from 'react'
import styled from 'styled-components'

const Home_all = () => {
    return (
        <>
            <PCWrapper>
                <PCDayArea>
                    <PCDayBlock>
                        <PCDayText>05.24 Mon</PCDayText>
                    </PCDayBlock>
                    <PCDayBlock>
                        <PCDayText>05.25 Tue</PCDayText>
                    </PCDayBlock>
                    <PCDayBlock>
                        <PCDayText>05.26 Wed</PCDayText>
                    </PCDayBlock>
                </PCDayArea>
                <PCSection>
                    <PCConTentsArea>
                        <PCMonSection1>
                            <PCTime>13:00~13:15</PCTime>
                            <PCTitle>오프닝 공연</PCTitle>
                            <PCTime>13:15~13:25</PCTime>
                            <PCTitle>환영사 1~3</PCTitle>
                            <PCTime>13:25~13:43</PCTime>
                            <PCTitle>기조발제/축사 1</PCTitle>
                            <PCTime>13:43~14:01</PCTime>
                            <PCTitle>기조발제/축사 2</PCTitle>
                            <PCTime>13:01~14:11</PCTime>
                            <PCTitle>기조발제/축사 3</PCTitle>
                            <PCTime>13:00~13:15</PCTime>
                            <PCTitle>주제영상</PCTitle>
                            <PCSubTitle>(모두의 목소리)</PCSubTitle>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCMonSection1>
                        <PCMonSection2 />
                    </PCConTentsArea>
                    <PCConTentsArea>
                        <PCTueSection1>
                            <PCTime>13:00~13:40</PCTime>
                            <PCTitle>기조발제 1</PCTitle>
                            <PCSubTitle>(문화예술교육 2.0의 다양성)</PCSubTitle>
                            <PCTueCharacter1>언스트 바그너</PCTueCharacter1>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCTueSection1>
                        <PCTueSection2>
                            <PCTime>13:40~15:25</PCTime>
                            <PCTitle>세션 1</PCTitle>
                            <PCSubTitle>(현장사례연구)</PCSubTitle>
                            <PCPhasis1>[모더레이터]</PCPhasis1>
                            <PCTueCharacter2>박신의</PCTueCharacter2>
                            <PCPhasis2>[발제자]</PCPhasis2>
                            <PCTueCharacter2>정용성, 이은수<br />김소원, 김수연, 이보람</PCTueCharacter2>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCTueSection2>
                        <PCTueSection3>
                            <PCLeftArea>
                                <PCTime>15:25~16:55</PCTime>
                                <PCTitle>세션 2</PCTitle>
                                <PCSubTitle>(예술치료)</PCSubTitle>
                                <PCPhasis1>[모더레이터]</PCPhasis1>
                                <PCTueCharacter2>글로리아 자파타</PCTueCharacter2>
                                <PCPhasis2>[발제자]</PCPhasis2>
                                <PCTueCharacter2>티나 쿠코,<br />엠시 베트만,<br />김채연,<br />산자크르스마노비츠타식</PCTueCharacter2>
                                <PCMove>이동하기 &#62;</PCMove>
                            </PCLeftArea>
                            <PCRightArea>
                                <PCTime>15:25~16:55</PCTime>
                                <PCTitle>세션 3</PCTitle>
                                <PCSubTitle>(사회적 & 문화적 포용)</PCSubTitle>
                                <PCPhasis1>[모더레이터]</PCPhasis1>
                                <PCTueCharacter2>네릴 제너렛</PCTueCharacter2>
                                <PCPhasis2>[발제자]</PCPhasis2>
                                <PCTueCharacter2>김태희, 샤를린 라헨드란<br />난 장, 야라 도크랏</PCTueCharacter2>
                                <PCMove>이동하기 &#62;</PCMove>
                            </PCRightArea>
                        </PCTueSection3>
                        <PCTueSection4>
                            <PCTime>16:55~18:10</PCTime>
                            <PCTitle>세션 4</PCTitle>
                            <PCSubTitle>(서울어젠다)</PCSubTitle>
                            <PCPhasis1>[모더레이터]</PCPhasis1>
                            <PCTueCharacter2>김인설</PCTueCharacter2>
                            <PCPhasis2>[발제자]</PCPhasis2>
                            <PCTueCharacter2>벤 볼든 & 네릴 제너렛<br />치후 룸&젠 터<br />캐서린 콜만 & 마크 셀크릭 & 에비 맥도날드</PCTueCharacter2>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCTueSection4>
                        <PCTueSection5>
                            <PCTime>16:55~18:10</PCTime>
                            <PCTitle>BYOB</PCTitle>
                            <PCSubTitle>(문화예술교육 2.0의 다양성)</PCSubTitle>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCTueSection5>
                        <PCTueSection6 />
                    </PCConTentsArea>
                    <PCConTentsArea>
                        <PCWedSection1>
                            <PCTime>13:00~13:40</PCTime>
                            <PCTitle>기조발제 2</PCTitle>
                            <PCSubTitle>(문화적 회복력과 미적 회복력)</PCSubTitle>
                            <PCTueCharacter1>벤야민 요리슨</PCTueCharacter1>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCWedSection1>
                        <PCWedSection2>
                            <PCTime>13:40~15:10</PCTime>
                            <PCTitle>세션 5</PCTitle>
                            <PCSubTitle>(교실 속의 예술)</PCSubTitle>
                            <PCPhasis1>[모더레이터]</PCPhasis1>
                            <PCTueCharacter2>벤 볼든</PCTueCharacter2>
                            <PCPhasis2>[발제자]</PCPhasis2>
                            <PCTueCharacter2>마리 클레어 키덴다<br />에밀리 맥밀런, 홍지혜<br />에밀리 윌슨 & 네릴 제너렛<br />벤야민 요리슨</PCTueCharacter2>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCWedSection2>
                        <PCWedSection3>
                            <PCLeftArea>
                                <PCTime>15:10~16:40</PCTime>
                                <PCTitle>세션 6</PCTitle>
                                <PCSubTitle>(예술참여)</PCSubTitle>
                                <PCPhasis1>[모더레이터]</PCPhasis1>
                                <PCTueCharacter2>신혜선</PCTueCharacter2>
                                <PCPhasis2>[발제자]</PCPhasis2>
                                <PCTueCharacter2>제환정<br />정혜연 & 성효진<br />레베카 칸 & 푸 세이밍 &<br />탄정수안 제프 풀린</PCTueCharacter2>
                                <PCMove>이동하기 &#62;</PCMove>
                            </PCLeftArea>
                            <PCRightArea>
                                <PCTime>15:10~16:40</PCTime>
                                <PCTitle>세션 7</PCTitle>
                                <PCSubTitle>(다양성 & 문화적 묘사)</PCSubTitle>
                                <PCPhasis1>[모더레이터]</PCPhasis1>
                                <PCTueCharacter2>치후 룸</PCTueCharacter2>
                                <PCPhasis2>[발제자]</PCPhasis2>
                                <PCTueCharacter2>루스 렌슬러, 심지영<br />김유리 & 박소정,<br />션 코코란 & 벤 볼든</PCTueCharacter2>
                                <PCMove>이동하기 &#62;</PCMove>
                            </PCRightArea>
                        </PCWedSection3>
                        <PCWedSection4>
                            <PCTime>16:40~18:25</PCTime>
                            <PCTitle>세션 8</PCTitle>
                            <PCSubTitle>(현장사례연구2))</PCSubTitle>
                            <PCPhasis1>[모더레이터]</PCPhasis1>
                            <PCTueCharacter2>장웅조</PCTueCharacter2>
                            <PCPhasis2>[발제자]</PCPhasis2>
                            <PCTueCharacter2>장수혜, 공윤지, 이현정<br />배성종, 최영희</PCTueCharacter2>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCWedSection4>
                        <PCWedSection5>
                            <PCTime>18:25~19:25</PCTime>
                            <PCTitle>폐회 세션</PCTitle>
                            <PCMove>이동하기 &#62;</PCMove>
                        </PCWedSection5>
                    </PCConTentsArea>
                </PCSection>
            </PCWrapper>
            <MOWrapper>
                <MOSection>
                    <MODayBlock>
                        <MODayText>05.24 Mon</MODayText>
                    </MODayBlock>
                </MOSection>
            </MOWrapper>
        </>
    )
}
// PC
const PCWrapper = styled.div`
    width : 100%;
    border : 1px solid var(--turtle-green);
    margin-bottom : 200px;
    display : block;
    
    @media all and (max-width:1199px) {
        display : none;
    }
`
// Day
const PCDayArea = styled.div`
    display : flex;
    background-color: #f9fff4;
`
const PCDayBlock = styled.div`
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
const PCDayText = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--turtle-green);
`
const PCSection =styled.div`
    display : flex;
`
const PCConTentsArea = styled.div`
    width : 400px;
`

const PCTime = styled.div`
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
const PCTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #222222;
    margin-top : 4px;
`
const PCSubTitle = styled.div`
    font-size: 20px;
    color: var(--black);
`

const PCTueCharacter1 = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const PCTueCharacter2 = styled.div`
    margin-top : 8px;
    font-size: 16px;
    font-weight: bold;
    text-align : center;
    color: var(--black);
`
const PCMove = styled.div`
    cursor: pointer;
    margin-top : 40px;
    font-size: 16px;
    font-weight: 500;
    color: var(--turtle-green);
`
const PCPhasis1 = styled.div`
    margin-top : 40px;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
`
const PCPhasis2 = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
`

const PCLeftArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-right : 1px solid var(--turtle-green);
`
const PCRightArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`

// Section
// Mon
const PCMonSection1 = styled.div`
    height : 695px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-top : 1px solid var(--turtle-green);
    border-right : 1px solid var(--turtle-green);
`
const PCMonSection2 = styled.div`
    height : 1277px;
    background-color: #f9fff4;
    border-top : 1px solid var(--turtle-green);
    border-right : 1px solid var(--turtle-green);
`

// Tue
const PCTueSection1 = styled.div`
    height : 304px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const PCTueSection2 = styled.div`
    height : 500px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const PCTueSection3 = styled.div`
    height : 464px;
    display : flex;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const PCTueSection4 = styled.div`
    height : 434px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const PCTueSection5 = styled.div`
    height : 198px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`
const PCTueSection6 = styled.div`
    height : 68px;
    background-color: #f9fff4;
    border-right : 1px solid var(--turtle-green);
    border-top : 1px solid var(--turtle-green);
`


// Wed
const PCWedSection1 = styled.div`
    height : 304px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`
const PCWedSection2 = styled.div`
    height : 456px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`
const PCWedSection3 = styled.div`
    height : 464px;
    display : flex;
    border-top : 1px solid var(--turtle-green);
`
const PCWedSection4 = styled.div`
    height : 548px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`
const PCWedSection5 = styled.div`
    height : 197px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid var(--turtle-green);
`

// Mobile
const MOWrapper = styled.div`
    position : relative;
    width : 375px;
    height : auto;
    display : none;
    padding-right :16px;
    padding-left :16px;
    @media all and (max-width:1200px) {
        display : block;
    }
`

const MOSection  = styled.div`
    border: solid 0.5px var(--turtle-green);
`

const MODayBlock = styled.div`
    width : auto;
    height : 40px;
    padding : 0px 12px;
    display : flex;
    align-items : center;
    background-color: #f9fff4;
`

const MODayText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
`

export default Home_all