import React from 'react'
import styled from 'styled-components'
import color from '../../../style/color'

const Home_all = ({top}) => {
    return (
        <>
            <PWrapper>
                <PSection1>
                    <PDayBlock>
                        <PDayText>05.24 Mon</PDayText>
                    </PDayBlock>
                    <PMonSection1>
                            <PTime>13:00~13:15</PTime>
                            <PTitle>오프닝 공연</PTitle>
                            <PTime>13:15~13:25</PTime>
                            <PTitle>환영사</PTitle>
                            <PTime>13:25~13:28</PTime>
                            <PTitle>축사</PTitle>
                            <PTime>13:28~13:43</PTime>
                            <PTitle>기조발제 1</PTitle>
                            <PTime>13:43~13:58</PTime>
                            <PTitle>기조발제 2</PTitle>
                            <PTime>13:58~14:08</PTime>
                            <PTitle>기조발제 3</PTitle>
                            <PTime>14:08~14:13</PTime>
                            <PTitle>개막영상</PTitle>
                            <PSubTitle>(모두의 목소리)</PSubTitle>
                            <PMove>이동하기 &#62;</PMove>
                    </PMonSection1>
                    <PMonSection2 />
                </PSection1>
                <PSection2>
                    <PDayBlock>
                        <PDayText>05.25 Tue</PDayText>
                    </PDayBlock>
                    <PTueSection1>
                            <PTime>13:00~13:40</PTime>
                            <PTitle>기조발제 1</PTitle>
                            <PSubTitle>(문화예술교육 2.0의 다양성)</PSubTitle>
                            <PTueCharacter1>언스트 바그너</PTueCharacter1>
                            <PPhasis1>[모더레이터]</PPhasis1>
                            <PTueCharacter2>차후 룸</PTueCharacter2>
                            <PMove>이동하기 &#62;</PMove>
                    </PTueSection1>
                    <PTueSection2>
                            <PTime>13:40~15:25</PTime>
                            <PTitle>세션 1</PTitle>
                            <PSubTitle>(현장사례연구 1)</PSubTitle>
                            <PPhasis1>[모더레이터]</PPhasis1>
                            <PTueCharacter2>박신의</PTueCharacter2>
                            <PPhasis2>[발제자]</PPhasis2>
                            <PTueCharacter2>정용성, 이은수<br />김소원, 김수연,<br />이보람</PTueCharacter2>
                            <PMove>이동하기 &#62;</PMove>
                    </PTueSection2>
                    <PTueSection3>
                            <PLeftArea>
                                <PTime>15:25~16:55</PTime>
                                <PTitle>세션 2</PTitle>
                                <PSubTitle>(예술치유)</PSubTitle>
                                <PPhasis1>[모더레이터]</PPhasis1>
                                <PTueCharacter2>글로리아 자파타</PTueCharacter2>
                                <PPhasis2>[발제자]</PPhasis2>
                                <PTueCharacter2>티나 쿠코,<br />산자 크르스마노비츠 타식,<br />엠시 베트만,<br />김채연</PTueCharacter2>
                                <PMove>이동하기 &#62;</PMove>
                            </PLeftArea>
                            <PRightArea>
                                <PTime>15:25~16:55</PTime>
                                <PTitle>세션 3</PTitle>
                                <PSubTitle>(사회적&문화적 포용)</PSubTitle>
                                <PPhasis1>[모더레이터]</PPhasis1>
                                <PTueCharacter2>네릴 제너렛</PTueCharacter2>
                                <PPhasis2>[발제자]</PPhasis2>
                                <PTueCharacter2>김태희,<br />샤를린 라헨드란,<br />난장,<br />야라 도크랏</PTueCharacter2>
                                <PMove>이동하기 &#62;</PMove>
                            </PRightArea>
                    </PTueSection3>
                    <PTueSection4>
                            <PTime>16:55~18:10</PTime>
                            <PTitle>세션 4</PTitle>
                            <PSubTitle>(서울어젠다)</PSubTitle>
                            <PPhasis1>[모더레이터]</PPhasis1>
                            <PTueCharacter2>김인설</PTueCharacter2>
                            <PPhasis2>[발제자]</PPhasis2>
                            <PTueCharacter2>벤 볼든 & 네릴 제너렛<br />치후 룸&젠 터<br />캐서린 콜만 & 마크 셀크릭 & 에비 맥도날드</PTueCharacter2>
                            <PMove>이동하기 &#62;</PMove>
                        </PTueSection4>
                </PSection2>
                <PSection3>
                    <PDayBlock>
                        <PDayText>05.26 Wed</PDayText>
                    </PDayBlock>

                </PSection3>
                {/* <PSection>
                    <PConTentsArea>
                       
                    </PConTentsArea>
                    <PConTentsArea>
                       
                       
                       
                        
                        <PTueSection5>
                            <PTime>16:55~18:10</PTime>
                            <PTitle>BYOB</PTitle>
                            <PSubTitle>(문화예술교육 2.0의 다양성)</PSubTitle>
                            <PMove top="27px">이동하기 &#62;</PMove>
                        </PTueSection5>
                    </PConTentsArea>
                    <PConTentsArea>
                        <PWedSection1>
                            <PTime>13:00~13:40</PTime>
                            <PTitle>기조발제 2</PTitle>
                            <PSubTitle>(문화적 회복력과 미적 회복력)</PSubTitle>
                            <PTueCharacter1>벤야민 요리슨</PTueCharacter1>
                            <PMove>이동하기 &#62;</PMove>
                        </PWedSection1>
                        <PWedSection2>
                            <PTime>13:40~15:10</PTime>
                            <PTitle>세션 5</PTitle>
                            <PSubTitle>(교실 속의 예술)</PSubTitle>
                            <PPhasis1>[모더레이터]</PPhasis1>
                            <PTueCharacter2>벤 볼든</PTueCharacter2>
                            <PPhasis2>[발제자]</PPhasis2>
                            <PTueCharacter2>마리 클레어 키덴다<br />에밀리 맥밀런, 홍지혜<br />에밀리 윌슨 & 네릴 제너렛<br />벤야민 요리슨</PTueCharacter2>
                            <PMove>이동하기 &#62;</PMove>
                        </PWedSection2>
                        <PWedSection3>
                            <PLeftArea>
                                <PTime>15:10~16:40</PTime>
                                <PTitle>세션 6</PTitle>
                                <PSubTitle>(예술참여)</PSubTitle>
                                <PPhasis1>[모더레이터]</PPhasis1>
                                <PTueCharacter2>신혜선</PTueCharacter2>
                                <PPhasis2>[발제자]</PPhasis2>
                                <PTueCharacter2>제환정<br />정혜연 & 성효진<br />레베카 칸 & 푸 세이밍 &<br />탄정수안 제프 풀린</PTueCharacter2>
                                <PMove>이동하기 &#62;</PMove>
                            </PLeftArea>
                            <PRightArea>
                                <PTime>15:10~16:40</PTime>
                                <PTitle>세션 7</PTitle>
                                <PSubTitle>(다양성 & 문화적 묘사)</PSubTitle>
                                <PPhasis1>[모더레이터]</PPhasis1>
                                <PTueCharacter2>치후 룸</PTueCharacter2>
                                <PPhasis2>[발제자]</PPhasis2>
                                <PTueCharacter2>루스 렌슬러, 심지영<br />김유리 & 박소정,<br />션 코코란 & 벤 볼든</PTueCharacter2>
                                <PMove top="61px">이동하기 &#62;</PMove>
                            </PRightArea>
                        </PWedSection3>
                        <PWedSection4>
                            <PTime>16:40~18:25</PTime>
                            <PTitle>세션 8</PTitle>
                            <PSubTitle>(현장사례연구 2)</PSubTitle>
                            <PPhasis1>[모더레이터]</PPhasis1>
                            <PTueCharacter2>장웅조</PTueCharacter2>
                            <PPhasis2>[발제자]</PPhasis2>
                            <PTueCharacter2>장수혜, 공윤지, 이현정<br />배성종, 최영희</PTueCharacter2>
                            <PMove top="55px">이동하기 &#62;</PMove>
                        </PWedSection4>
                        <PWedSection5>
                            <PTime>18:25~19:25</PTime>
                            <PTitle>폐회 세션</PTitle>
                            <PMove>이동하기 &#62;</PMove>
                        </PWedSection5>
                    </PConTentsArea>
                </PSection> */}
            </PWrapper>


            <MWrapper>
                <MInner>
                    <MSection>
                        <MDayBlock>
                            <MDayText>05.24 Mon</MDayText>
                        </MDayBlock>
                        <MContents>
                            <MTime>13:00~13:25</MTime>
                            <MTextArea>
                                <MTitle>오프닝 공연 / 환영사</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>13:25~13:43</MTime>
                            <MTextArea>
                                <MTitle>기조발제 1 / 축사</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>13:43~14:01</MTime>
                            <MTextArea>
                                <MTitle>기조발제 2 / 축사</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>14:01~14:14</MTime>
                            <MTextArea>
                                <MTitle>기조발제 3 / 축사</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>14:14~14:19</MTime>
                            <MTextArea>
                                <MTitle>주제영상</MTitle>
                                <MSubTitle>(모두의 목소리)</MSubTitle>
                            </MTextArea>
                        </MContents>
                    </MSection>
                    <MSection>
                        <MDayBlock>
                            <MDayText>05.25 Tue</MDayText>
                        </MDayBlock>
                        <MContents>
                            <MTime>13:00~13:40</MTime>
                            <MTextArea>
                                <MTitle>기조발제 1</MTitle>
                                <MSubTitle>(문화예술교육 2.0의 다양성)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>13:40~15:25</MTime>
                            <MTextArea>
                                <MTitle>세션 1</MTitle>
                                <MSubTitle>(현장사례연구 1)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>15:25~16:55</MTime>
                            <MTextArea>
                                <MTitle>세션 2</MTitle>
                                <MSubTitle>(예술치유)</MSubTitle>
                                <MTitle top="16px">세션 3</MTitle>
                                <MSubTitle>(사회적 & 문화적 포용)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>16:55~18:10</MTime>
                            <MTextArea>
                                <MTitle>세션 4</MTitle>
                                <MSubTitle>(서울 어젠다)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>18:10~19:10</MTime>
                            <MTextArea>
                                <MTitle>BYOB</MTitle>
                                <MSubTitle>(온라인 만남의 광장)</MSubTitle>
                            </MTextArea>
                        </MContents>
                    </MSection>
                    <MSection>
                        <MDayBlock>
                            <MDayText>05.26 Wed</MDayText>
                        </MDayBlock>
                        <MContents>
                            <MTime>13:00~13:40</MTime>
                            <MTextArea>
                                <MTitle>기조발제 2</MTitle>
                                <MSubTitle>(문화적 회복력과 미적 회복력)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>13:40~15:10</MTime>
                            <MTextArea>
                                <MTitle>세션 5</MTitle>
                                <MSubTitle>(교실 속의 예술)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>15:10~16:40</MTime>
                            <MTextArea>
                                <MTitle>세션 6</MTitle>
                                <MSubTitle>(예술참여)</MSubTitle>
                                <MTitle top="16px">세션 7</MTitle>
                                <MSubTitle>(다양성 & 문화적 묘사)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>16:55~18:10</MTime>
                            <MTextArea>
                                <MTitle>세션 8</MTitle>
                                <MSubTitle>(현장사례연구 2)</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>18:25~19:25</MTime>
                            <MTextArea>
                                <MTitle>폐회 세션</MTitle>
                            </MTextArea>
                        </MContents>
                    </MSection>
                </MInner>
            </MWrapper>
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    border : 1px solid ${color.turtle_green};
    margin-bottom : 200px;
    display : flex;
    
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PSection1 = styled.div`
    width : 400px;
    height : 2190px;
    border-right : 1px solid ${color.turtle_green};
`
const PSection2 = styled.div`
    width : 400px;
    height : 2190px;
    border-right : 1px solid ${color.turtle_green};
`
const PSection3 = styled.div`
    width : 400px;
    height : 2190px;
`

const PMonSection1 = styled.div`
    height : 742px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-top : 1px solid ${color.turtle_green};
`
const PMonSection2 = styled.div`
    height : 1380px;
    background-color: #f9fff4;
    border-top : 1px solid ${color.turtle_green};
`
const PTueSection1 = styled.div`
    height : 380px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PTueSection2 = styled.div`
    height : 510px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PTueSection3 = styled.div`
    height : 454px;
    display : flex;
    border-top : 1px solid ${color.turtle_green};
`
const PLeftArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    border-right : 1px solid ${color.turtle_green};
`
const PRightArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`
const PTueSection4 = styled.div`
    height : 558px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`


const PDayBlock = styled.div`
    width : 100%;
    height : 68px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: #f9fff4;
`
const PDayText = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${color.turtle_green};
`

const PPhasis1 = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const PTueCharacter1 = styled.div`
    margin-top : 30px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PTueCharacter2 = styled.div`
    margin-top : 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
    text-align : center;
`






// Day
const PDayArea = styled.div`
    display : flex;
    background-color: #f9fff4;
`


const PSection =styled.div`
    display : flex;
`
const PConTentsArea = styled.div`
    width : 399px;
`

const PTime = styled.div`
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
const PTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #222222;
    margin-top : 4px;
`
const PSubTitle = styled.div`
    font-size: 18px;
    color: ${color.black};
`



const PMove = styled.div`
    cursor: pointer;
    margin-top : ${props => props.top || '40px'};
    font-size: 16px;
    font-weight: 500;
    color: ${color.turtle_green};
`

const PPhasis2 = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
`




// Section
// Mon



// Tue




const PTueSection5 = styled.div`
    height : 198px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-right : 1px solid ${color.turtle_green};
    border-top : 1px solid ${color.turtle_green};
`

// Wed
const PWedSection1 = styled.div`
    height : 304px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection2 = styled.div`
    height : 500px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection3 = styled.div`
    height : auto;
    display : flex;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection4 = styled.div`
    height : 500px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection5 = styled.div`
    height : 197px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`

// Mobile
const MWrapper = styled.div`
    width : auto;
    display : flex;
    justify-content : center;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 100%;
`
const MSection  = styled.div`
    margin-top : 28px;
    border: solid 0.5px ${color.turtle_green};
`
const MDayBlock = styled.div`
    height : 40px;
    padding : 0px 12px;
    display : flex;
    align-items : center;
    background-color: #f9fff4;
`
const MDayText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const MContents = styled.div`
    display : flex;
    padding : 8px 12px;
    border-top: solid 0.5px ${color.turtle_green};
`
const MTime = styled.div`
    width : 117px;
    font-size: 14px;
    color: ${color.brownish_grey};
    /* background-color : red; */
`
const MTextArea = styled.div`
cursor: pointer;
`

const MTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
    margin-top : ${props => props.top || '0px'}
`
const MSubTitle = styled.div`
    margin-top : 4px;
    font-size: 14px;
    font-weight: 500;
    color: ${color.turtle_green};
`




export default Home_all