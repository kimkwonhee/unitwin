import React from 'react'
import styled from 'styled-components'
import Cal_TopArea from '../../molecules/Cal_TopArea'
import color from '../../../style/color'

const Home_day1 = () => {
    return (
        <>
            <PWrapper>
               <PCal_TopArea 
                    title="개막식 및 학술대회 사전행사"
                    videobtn={true}
                    width="120px"
                    time="13:00~14:19"
               />
               <PSection>
                    <PLeftInner>
                        <PLeftTitle>오프닝 공연</PLeftTitle>
                        <PLeftTime>13:00~13:15</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>원형하는 몸 : round1</PRightTitle>
                                <PRightName>차진엽</PRightName>
                                <PRightJop>- collective A 예술감독, 대한민국</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>환영사</PLeftTitle>
                        <PLeftTime>13:15~13:25</PLeftTime>
                    </PLeftInner>
                    {/* <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightName>황희</PRightName>
                                <PRightJop>- 문화체육관광부 장관</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightName>박신의</PRightName>
                                <PRightJop>- 한국문화예술교육진흥원 이사장</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightName>이규석</PRightName>
                                <PRightJop>- 한국문화예술교육진흥원 원장</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight> */}
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>축사</PLeftTitle>
                        <PLeftTime>13:25~13:28</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightName>래리 오페럴 <PRightEnName>(Larry O’ Farrell)</PRightEnName></PRightName>
                                <PRightJop>- 유니트윈-문화다양성과 지속가능발전을 위한 예술교육 연구회 명예회원, 캐나다</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>기조발제 1</PLeftTitle>
                        <PLeftTime>13:28~13:43</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>문화와 기후변화</PRightTitle>
                                <PRightName>벤 트위스트 <PRightEnName>(Ben Twist)</PRightEnName></PRightName>
                                <PRightJop>- 크리에이티브 카본 스코틀랜드 대표, 스코틀랜드</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>기조발제 2</PLeftTitle>
                        <PLeftTime>13:43~13:58</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                {/* <PRightTitle>펜데믹 시기, 예술의 변화</PRightTitle> */}
                                <PRightName>피터 셀라스 <PRightEnName>(Peter Sellars)</PRightEnName></PRightName>
                                <PRightJop>- 연극 감독/UCLA 교수, 미국</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>기조발제 3</PLeftTitle>
                        <PLeftTime>13:58~14:08</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                {/* <PRightTitle>펜데믹 시기, 예술의 변화</PRightTitle> */}
                                <PRightName>요조</PRightName>
                                <PRightJop>- 매직스트로베리사운드 싱어송라이터/작가, 대한민국</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>개막영상</PLeftTitle>
                        <PLeftTime>14:08~14:13</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>&#60;모두의 목소리&#62;</PRightTitle>
                                <PRightSubText>‘사회 위기 속 참여적 문화예술교육의 역할’이라는 메시지를 전달하는 예술교육자와 시민들과의 인터뷰</PRightSubText>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>제4회 유니트윈<br />국제 학술대회<br />사전행사</PLeftTitle>
                        <PLeftTime>14:15~15:35</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>&#60;지금, 기후위기-문화예술교육을 통해 바라본 기후위기&#62;</PRightTitle>
                                <PRightName>박신의</PRightName>
                                <PRightJop>- 제4회 유네스코 유니트윈 국제 학술대회 조직위원장 / 경희대학교 교수, 대한민국</PRightJop>
                                <PRightName>성지수</PRightName>
                                <PRightJop>- 콜렉티브 뒹굴 대표, 대한민국</PRightJop>
                                <PRightName>일점오도씨</PRightName>
                                <PRightJop>- 청소년 기후위기 행동 단체, 대한민국</PRightJop>
                                <PRightName>모상미</PRightName>
                                <PRightJop>- 부산 모이다아트협동조합 대표, 대한민국</PRightJop>
                                <PRightName>강진숙</PRightName>
                                <PRightJop>- 광명업사이클아트센터 대표, 대한민국</PRightJop>
                                <PRightName>박진희</PRightName>
                                <PRightJop>- 상상창고 숨 대표 / 제주문화예술재단 창의예술교육랩장, 대한민국</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
            </PWrapper>
            {/* mobile */}
            <MWrapper>
                <MInner>
                    <MCal_TopArea 
                        title="학술대회 사전세션"
                        videobtn={true}
                        width="97px"
                        time="13:00~14:19"
                    />
                    <MSection>
                        <MLeftInner>
                            <MLeftTitle>오프닝 공연</MLeftTitle>
                            <MLeftTime>13:00~13:15</MLeftTime>
                        </MLeftInner>
                        <MRight>
                            <MRightInner>
                                <MRightSection>
                                    <MRightName>차진엽</MRightName>
                                    <MRightJop>- 현대무용가/ 콜렉티브 에이</MRightJop>
                                </MRightSection>
                            </MRightInner>
                        </MRight>
                    </MSection>
                    <MSection>
                        <MLeftInner>
                            <MLeftTitle>환영사</MLeftTitle>
                            <MLeftTime>13:15~13:25</MLeftTime>
                        </MLeftInner>
                        <MRight>
                            <MRightInner>
                                <MRightSection>
                                    <MRightName>황희</MRightName>
                                    <MRightJop>- 문화체육관광부 장관</MRightJop>
                                </MRightSection>
                                <MRightSection>
                                    <MRightName>박신의</MRightName>
                                    <MRightJop>- 한국문화예술교육진흥원 이사장</MRightJop>
                                </MRightSection>
                            </MRightInner>
                        </MRight>
                    </MSection>

                </MInner>
            </MWrapper> 
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    height : auto;
    display : block;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PCal_TopArea = styled(Cal_TopArea)`
`
const PSection = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    border-bottom : 1px solid ${color.turtle_green};
    padding : 40px 0;
    &:last-child {
        margin-bottom : 200px;
        border-bottom : none;
    }
`
// left
const PLeftInner = styled.div`
    width : 282px;
    height : auto;
    margin-right : 24px;
    padding-left : 40px;
`
const PLeftTitle = styled.div`
    font-size: 28px;
    font-weight: 900;
    color: ${color.black};
`
const PLeftTime = styled.div`
    margin-top : 4px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
// Right
const PRight = styled.div`
    width : 894px;
    margin-left : 18px;
    /* display : block; */
    display : flex;
    align-items : center;
`
const PRightInner = styled.div`
    border-bottom : 1px solid ${color.very_light_pink};
    &:last-child {
        border-bottom : none;
    }
`
const PRightSection = styled.div`
    margin-bottom : 40px;
    
    &:last-child {
        margin-bottom : 0px;
    }
`
const PRightTitle = styled.div`
     font-size: 20px;
     font-weight: bold;
     color: ${color.black};
     margin-bottom : 40px;
`
const PRightSubText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PRightName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 8px;

    margin-top : 40px;
    &:first-child {
        margin-top : 0px;
    }
`
const PRightEnName = styled.span`
    font-size: 14px;
    color: #aaaaaa;
`
const PRightJop = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${color.black};
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
const MCal_TopArea = styled(Cal_TopArea)`
    margin-top : 28px;
`
const MSection = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    border-bottom : 1px solid ${color.turtle_green};
    padding : 12px 0;
    &:last-child {
        border-bottom : none;
    }
`
const MLeftInner = styled.div`
    width : 129px;
    height : auto;
    padding-left : 12px;
`
const MLeftTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
`
const MLeftTime = styled.div`
    margin-top : 2px;
    font-size: 12px;
    font-weight: bold;
    color: ${color.black};
`
const MRight = styled.div`
    width : 200px;
    display : block;
`
const MRightInner = styled.div`
    border-bottom : 1px solid ${color.very_light_pink};
    &:last-child {
        border-bottom : none;
    }
`
const MRightSection = styled.div`
    margin-bottom : 12px;
    
    &:last-child {
        margin-bottom : 0px;
    }
`
const MRightName = styled.div`
    font-size: 14px;
    font-weight : 500;
    color: ${color.black};
    margin-bottom : 2px;
`
const MRightEnName = styled.span`
    font-size: 12px;
    color: ${color.brownish_grey};
`
const MRightJop = styled.div`
    font-size: 12px;
    color: ${color.black};
`


export default Home_day1