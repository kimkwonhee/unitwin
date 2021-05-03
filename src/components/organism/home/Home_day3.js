import React from 'react'
import styled from 'styled-components'
import Cal_TopArea from '../../molecules/Cal_TopArea'

const Home_day3 = () => {
    return (
        <>
            <PWrapper>
               <PCal_TopArea 
                    title="학술대회 사전세션"
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
                                <PRightName>차진엽</PRightName>
                                <PRightJop>- Collective A 예술감독</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>환영사</PLeftTitle>
                        <PLeftTime>13:15~13:25</PLeftTime>
                    </PLeftInner>
                    <PRight>
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
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>축사</PLeftTitle>
                        <PLeftTime>13:25~13:31</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightName>오드리 아줄레 <PRightEnName>(Audrey Azoulay)</PRightEnName></PRightName>
                                <PRightJop>- 유네스코 사무총장</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightName>래리 오페럴 <PRightEnName>(Larry O’ Farrell)</PRightEnName></PRightName>
                                <PRightJop>- 유니트윈 명예회원</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>기조발제 1</PLeftTitle>
                        <PLeftTime>13:31~13:46</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>지속가능한 예술생태계 구축을 통한 선제적 위기 대처: 성북 ‘예술순환로’ 프로젝트 사례 중심</PRightTitle>
                                <PRightName>벤 트위스트 <PRightEnName>(Ben Twist)</PRightEnName></PRightName>
                                <PRightJop>- 크리에이티브 카본 스코틀랜드 국장</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>기조발제 2</PLeftTitle>
                        <PLeftTime>13:46~14:01</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>펜데믹 시기, 예술의 변화</PRightTitle>
                                <PRightName>피터 셀라스 <PRightEnName>(Peter Sellars)</PRightEnName></PRightName>
                                <PRightJop>- 연극 감독 / UCLA 세계문화예술/무용학부 교수</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>기조발제 3</PLeftTitle>
                        <PLeftTime>14:01~14:11</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>펜데믹 시기, 예술의 변화</PRightTitle>
                                <PRightName>요조</PRightName>
                                <PRightJop>- 싱어송라이터 / 작가</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>주제영상</PLeftTitle>
                        <PLeftTime>14:11~14:16</PLeftTime>
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
    border-bottom : 1px solid var(--turtle-green);
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
    color: var(--black);
`
const PLeftTime = styled.div`
    margin-top : 4px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
// Right
const PRight = styled.div`
    width : 894px;
    margin-left : 18px;
    display : block;
`
const PRightInner = styled.div`
    border-bottom : 1px solid var(--very-light-pink);
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
     color: var(--black);
     margin-bottom : 40px;
`
const PRightSubText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`

const PRightName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
    margin-bottom : 8px;
`
const PRightEnName = styled.span`
    font-size: 14px;
    color: var(--brown-grey);
`
const PRightJop = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
`
const PRightModer = styled.div`
    margin-top : 40px;
    margin-bottom : 8px;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
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
    border-bottom : 1px solid var(--turtle-green);
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
    color: var(--black);
`
const MLeftTime = styled.div`
    margin-top : 2px;
    font-size: 12px;
    font-weight: bold;
    color: var(--black);
`
const MRight = styled.div`
    width : 200px;
    display : block;
`
const MRightInner = styled.div`
    border-bottom : 1px solid var(--very-light-pink);
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
    color: var(--black);
    margin-bottom : 2px;
`
const MRightEnName = styled.span`
    font-size: 12px;
    color: var(--brown-grey);
`
const MRightJop = styled.div`
    font-size: 12px;
    color: var(--black);
`


export default Home_day3