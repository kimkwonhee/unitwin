import React from 'react'
import styled from 'styled-components'
import Cal_TopArea from '../../molecules/Cal_TopArea'
import color from '../../../style/color'

const Home_day2 = () => {
    return (
        <>
            <PWrapper>
               <PCal_TopArea 
                    title="제4회 유네스코 유니트윈 국제 학술대회"
                    width="120px"
                    time="13:00~14:19"
               />
               <PSection>
                    <PLeftInner>
                        <PLeftTitle>기조발제 1</PLeftTitle>
                        <PLeftTime>13:00~13:40</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>문화예술교육 2.0의 다양성</PRightTitle>
                                <PRightName>언스트 바그너 <PRightEnName>(Ernst Wagner)</PRightEnName></PRightName>
                                <PRightJop>- 유니트윈-문화다양성과 지속가능발전을 위한 예술교육 연구회 명예회원 / 뮌헨 미술원 선임연구원, 독일</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>[모더레이터]</PRightModer>
                                <PRightName>치후 룸 <PRightEnName>(Chee-Hoo Lum)</PRightEnName></PRightName>
                                <PRightJop>- 국립교육원 부교수, 싱가포르</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>세션 1</PLeftTitle>
                        <PLeftSub>현장사례연구 1</PLeftSub>
                        <PLeftTime>13:00~15:25</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>극장은 '작은 지구'입니다</PRightTitle>
                                <PRightName>정용성</PRightName>
                                <PRightJop>- 국립극단 팀장, 대한민국</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>펜데믹 시기, 예술의 변화</PRightTitle>
                                <PRightName>이은수</PRightName>
                                <PRightJop>- 국립현대미술관 주무관, 대한민국</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>지속가능한 예술생태계 구축을 통한 선제적 위기 대처: 성북 ‘예술순환로’ 프로젝트 사례 중심</PRightTitle>
                                <PRightName>김소원</PRightName>
                                <PRightJop>- 성북문화재단 학예연구사, 대한민국</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>수상한 식탁</PRightTitle>
                                <PRightName>김수연</PRightName>
                                <PRightJop>- 경성대학교 조교수, 대한민국</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>창의적인 온라인 워크샵 만들기</PRightTitle>
                                <PRightName>이보람</PRightName>
                                <PRightJop>- 사우스 오스트레일리아 대학교 교수, 대한민국</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>[모더레이터]</PRightModer>
                                <PRightName>박신의</PRightName>
                                <PRightJop>- 유니트윈 학술대회 조직위원회 위원장 / 경희대학교 교수, 대한민국</PRightJop>
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
const PLeftSub = styled.div`
    margin-top : 40px;
    font-size: 20px;
    font-weight: bold;
    color: ${color.turtle_green};
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
    display : block;
`
const PRightInner = styled.div`
    border-bottom : 1px solid ${color.very_light_pink};
    &:last-child {
        border-bottom : none;
    }
`
const PRightSection = styled.div`
    margin-bottom : 40px;
    border-bottom : 1px solid #d0d0d0;
    padding-bottom: 40px;
    &:last-child {
        margin-bottom : 0px;
        border-bottom : none;
        padding-bottom: 0;
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
`
const PRightEnName = styled.span`
    font-size: 14px;
    color: ${color.brownish_grey};
`
const PRightJop = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${color.black};
`
const PRightModer = styled.div`
    margin-top : 40px;
    margin-bottom : 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
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


export default Home_day2