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
                    time="13:00~19:10"
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
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>세션 2</PLeftTitle>
                        <PLeftSub>예술 치유</PLeftSub>
                        <PLeftTime>15:25~16:55</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>예술과 예술을 통한 청소년 정신 건강 지원 : 예술가 교육을 위한 증거 기반 및 가이드</PRightTitle>
                                <PRightName>티나 쿠코 <PRightEnName>(Tiina Kukkonen)</PRightEnName></PRightName>
                                <PRightJop>- 퀸즈 대학교 박사과정생, 캐나다</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>변하는 세상에서 안정의 원천으로서 연극 / 연극 교육과 예술 교육의 중요성</PRightTitle>
                                <PRightName>산자 크르스마노비츠 타식 <PRightEnName>(Sanja Krsmanovic Tasic)</PRightEnName></PRightName>
                                <PRightJop>- 국제연극교육협회(IDEA) 이사장, 세르비아</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>6학년 크리에이티브 아트 교실에서 생활 기술을 개발하기 위한 수행 교육</PRightTitle>
                                <PRightName>엠시 베트만 <PRightEnName>(MC Bettman)</PRightEnName></PRightName>
                                <PRightJop>- 남아프리카 대학교 조교수, 남아프리카</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>펜데믹 시대의 심리적 문제와 정신건강의 대응방안으로써의 문화예술치유</PRightTitle>
                                <PRightName>김채연</PRightName>
                                <PRightJop>- (사)한국임상미술치료협회 회장, 대한민국</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>[모더레이터]</PRightModer>
                                <PRightName>글로리아 자파타 <PRightEnName>(Gloria P. Zapata)</PRightEnName></PRightName>
                                <PRightJop>- 후안 코파스 대학재단, 보고타 구립 대학교 유네스코 체어, 콜롬비아</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>세션 3</PLeftTitle>
                        <PLeftSub>사회적 & 문화적 포용</PLeftSub>
                        <PLeftTime>15:25~16:55</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>팬데믹과 관계없이 비대면 예술교육이 필요한 세계 아이들에 대한 고찰</PRightTitle>
                                <PRightName>김태희</PRightName>
                                <PRightJop>- 바라예술성장연구소 소장, 대한민국</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>차이의 세계에서 성장하기: 싱가포르 다양성 속에서 살아가는 이야기</PRightTitle>
                                <PRightName>샤를린 라헨드란 <PRightEnName>(Charlene Rajendran)</PRightEnName></PRightName>
                                <PRightJop>- - 난양공과대학 조교수, 싱가포르</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>춤과 언어교육의 융합: 위기의 시대 속에서 사회 다양성과 평등에 대한 창의적인 대응</PRightTitle>
                                <PRightName>난 장 <PRightEnName>(Nan Zhang)</PRightEnName></PRightName>
                                <PRightJop>- 모내시 대학교 박사과정생, 호주</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>주의력 또는 과잉 활동 장애가 있는 4~8학년 학생을 위한<br />정서적 자기 조절을 촉진하기 위한 예술: 여러 사례 연구</PRightTitle>
                                <PRightName>야라 도크랏 <PRightEnName>(Yaara Docrat)</PRightEnName></PRightName>
                                <PRightJop>- 퀸즈 대학교 석사과정생, 캐나다</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>[모더레이터]</PRightModer>
                                <PRightName>네릴 제너렛 <PRightEnName>(Neryl Jeanneret)</PRightEnName></PRightName>
                                <PRightJop>- 멜버른 대학교 부교수, 호주</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>세션 4</PLeftTitle>
                        <PLeftSub>서울 어젠다</PLeftSub>
                        <PLeftTime>16:55~18:10</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>예술교육 지속가능성의 전망: 가치, 도전 그리고 가능성</PRightTitle>
                                <PRightName>벤자민 볼든 <PRightEnName>(Benjamin Bolden)</PRightEnName></PRightName>
                                <PRightJop>- 퀸즈대학교 부교수, 캐나다</PRightJop>
                                <PRightName>네릴 제너렛 <PRightEnName>(Neryl Jeanneret)</PRightEnName></PRightName>
                                <PRightJop>- 멜버른 대학교 부교수, 호주</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>환경 예술작가, 젠터와의 대화: 과정과 교육적 가능성 탐색</PRightTitle>
                                <PRightName>치후 룸 <PRightEnName>(Chee-Hoo Lum)</PRightEnName></PRightName>
                                <PRightJop>- 난양 공과대학교 부교수, 싱가포르</PRightJop>
                                <PRightName>젠 터 <PRightEnName>(Zen Teh)</PRightEnName></PRightName>
                                <PRightJop>- 환경 예술가 및 교육자, 싱가포르</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>시각예술교육: 지연의 연속과 불확실한 시간 속에서 세계를<br />이어주고, 풀어주고, 지속하며 완화해주는 국제적 맥락</PRightTitle>
                                <PRightName>캐서린 콜만 <PRightEnName>(Kathryn Coleman)</PRightEnName></PRightName>
                                <PRightJop>- 맬버른대학교 부교수, 호주(빅토리아, 태즈메이니아)</PRightJop>
                                <PRightName>마크 셀크릭 <PRightEnName>(Mark Selkrig)</PRightEnName></PRightName>
                                <PRightJop>- 맬버른대학교 부교수, 호주(빅토리아, 태즈메이니아)</PRightJop>
                                <PRightName>에비 맥도날드 <PRightEnName>(Abbey MacDonald)</PRightEnName></PRightName>
                                <PRightJop>- 태즈매니아대학교 부교수, 호주(빅토리아, 태즈메이니아)</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>[모더레이터]</PRightModer>
                                <PRightName>김인설</PRightName>
                                <PRightJop>- 가톨릭대학교 부교수, 대한민국</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>BYOB</PLeftTitle>
                        <PLeftTime>18:00~19:00</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>온라인 만남의 광장</PRightTitle>
                                <PRightName>Bring Your Own Bottle(BYOB)는 학술대회 참가자들이 자유롭게 학술대회 주제 및<br />참가자의 관심사에 대해 나누는 네트워킹 세션입니다.</PRightName>
                                <PRightJop>* BYOB는 ZOOM에서 진행됩니다.</PRightJop>
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
const PRightName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 8px;

    &:nth-child(4),
    &:nth-child(6) {
        margin-top : 40px;
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