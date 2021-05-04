import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom';
import img_01 from '../images/session_26.png'
import img_02 from '../images/session_27.png'
import img_03 from '../images/session_33.png'
import PageTopArea from '../components/molecules/PageTopArea'
import Pl_SectionData from '../components/organism/plenarysession/Pl_SectionData'

const _Byob = () => {
        
        const p_topcontents = {
        title : 'BYOB\n온라인 만남의 광장',
        contents : '학술대회 참가자들이 자유롭게 학술대회 주제 및 참가자의 관심사에 대해 나누는\n네트워킹 세션입니다.',
        data : [
            {
                imgs : img_01,
                name : "박신의",
                jop : "- 제4회 유네스코 유니트윈 국제 학술대회 조직위원회 위원장 / 경희대학교 교수, 한국",
                discripton : "박신의는 경희대학교 경영대학원 문화예술경영학과 교수이고, 한국문화예술교육진흥원 이사장이다. 주요 연구 주제는 '예술의 사회적 영향', '예술치유', '예술기업가정신', '박물관 경영', '문화정책' 등이다."

            },
            {
                imgs : img_02,
                name : "홍유진",
                jop : "- 한국문화예술교육진흥원 교육기반본부 본부장, 한국",
                discripton : "홍유진은 문화체육관광부 산하 한국문화예술교육진흥원(KACES)에서 문화예술교육 정책 연구 및 조사분석, 정책 및 기관 전략 수립 등의 업무를 추진해왔다. 이화여자대학교에서 사회학(문화사회학)을 전공하고 박사학위를 받았고, 한국콘텐츠진흥원(KOCCA)에서 문화콘텐츠산업 정책에 관한 다양한 프로젝트를 진행했다. 현재 KACES의 교육기반본부장으로 문화예술교육 관련 연구, 연수, 국제협력 등을 총괄하며, 온라인 문화예술교육 추진단TF 팀장을 겸하고 있다."
            },
            {
                imgs : img_03,
                name : "장웅조",
                jop : "- 홍익대학교 부교수, 한국",
                discripton : "장웅조는 예술경영과 문화정책 연구를 해오며, 최근에는 예술리더십과 앙트러프러너십에 관련한 주제에 집중하고 있다. 서울대에서 중문학 학사와 공연예 술학 석사를 마치고, 미국 오하이오 주립대학에서 예술정책 및 경영 전공으로 박사학위를 받았다. 이후 미국 시애틀대학교의 예술리더십 학과 교수를 거쳐 홍익대학교 문화예술경영학과 교수로 재직 중이다. 현재 Journal of Arts Management, Law, and Society, 예술경영연구, 문화경제, 문화정책논총 등 의 편집위원이며 한국 문화예술경영학회의 학술위원장으로 활동하고 있다."
            },
        ]
    }

    const m_topcontents = {
        title : '행사소개',
        contents : '우리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데, 예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한 자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한성찰의 힘을 불러 일으킬 것입니다.',
        data : [
            {
                imgs : img_01,
                name : "박신의",
                jop : "- 제4회 유네스코 유니트윈 국제 학술대회 조직위원회 위원장 / 경희대학교 교수, 한국",
                discripton : "박신의는 경희대학교 경영대학원 문화예술경영학과 교수이고, 한국문화예술교육진흥원 이사장이다. 주요 연구 주제는 '예술의 사회적 영향', '예술치유', '예술기업가정신', '박물관 경영', '문화정책' 등이다."

            },
            {
                imgs : img_02,
                name : "홍유진",
                jop : "- 한국문화예술교육진흥원 교육기반본부 본부장, 한국",
                discripton : "홍유진은 문화체육관광부 산하 한국문화예술교육진흥원(KACES)에서 문화예술교육 정책 연구 및 조사분석, 정책 및 기관 전략 수립 등의 업무를 추진해왔다. 이화여자대학교에서 사회학(문화사회학)을 전공하고 박사학위를 받았고, 한국콘텐츠진흥원(KOCCA)에서 문화콘텐츠산업 정책에 관한 다양한 프로젝트를 진행했다. 현재 KACES의 교육기반본부장으로 문화예술교육 관련 연구, 연수, 국제협력 등을 총괄하며, 온라인 문화예술교육 추진단TF 팀장을 겸하고 있다."
            },
            {
                imgs : img_03,
                name : "장웅조",
                jop : "- 홍익대학교 부교수, 한국",
                discripton : "장웅조는 예술경영과 문화정책 연구를 해오며, 최근에는 예술리더십과 앙트러프러너십에 관련한 주제에 집중하고 있다. 서울대에서 중문학 학사와 공연예 술학 석사를 마치고, 미국 오하이오 주립대학에서 예술정책 및 경영 전공으로 박사학위를 받았다. 이후 미국 시애틀대학교의 예술리더십 학과 교수를 거쳐 홍익대학교 문화예술경영학과 교수로 재직 중이다. 현재 Journal of Arts Management, Law, and Society, 예술경영연구, 문화경제, 문화정책논총 등 의 편집위원이며 한국 문화예술경영학회의 학술위원장으로 활동하고 있다."
            }
        ]
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents 
                            title={p_topcontents.title} 
                            contents={p_topcontents.contents}
                        />
                    <PZoomArea>
                        <PZoombtn><PZoomText>ZOOM으로 참여하기</PZoomText></PZoombtn>
                    </PZoomArea>
                    <PMiddleArea>
                        <P_Data 
                            imgs={p_topcontents.data[0].imgs}
                            name={p_topcontents.data[0].name}
                            jop={p_topcontents.data[0].jop}
                            discripton={p_topcontents.data[0].discripton}
                        />
                        <P_Data 
                            imgs={p_topcontents.data[1].imgs}
                            name={p_topcontents.data[1].name}
                            jop={p_topcontents.data[1].jop}
                            discripton={p_topcontents.data[1].discripton}
                        />
                        <P_Data 
                            imgs={p_topcontents.data[2].imgs}
                            name={p_topcontents.data[2].name}
                            jop={p_topcontents.data[2].jop}
                            discripton={p_topcontents.data[2].discripton}
                        />
                    </PMiddleArea>
                </PInner>
            </PWrapper>
            {/* Mobile */}
            
            <MWrapper>
                <MInner>
                    <MContents 
                            title={m_topcontents.title} 
                            contents={m_topcontents.contents}
                        />
                    <MMiddleArea>
                        <M_Data 
                            imgs={m_topcontents.data[0].imgs}
                            name={m_topcontents.data[0].name}
                            jop={m_topcontents.data[0].jop}
                            discripton={m_topcontents.data[0].discripton}
                        />
                        <M_Data 
                            imgs={m_topcontents.data[1].imgs}
                            name={m_topcontents.data[1].name}
                            jop={m_topcontents.data[1].jop}
                            discripton={m_topcontents.data[1].discripton}
                        />
                        <M_Data 
                            imgs={m_topcontents.data[2].imgs}
                            name={m_topcontents.data[2].name}
                            jop={m_topcontents.data[2].jop}
                            discripton={m_topcontents.data[2].discripton}
                        />
                    </MMiddleArea>
                </MInner>
            </MWrapper>
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    margin-bottom : 210px;
    display : flex;
    justify-content : center;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    position : relative;
    width : 1200px;
`
const PContents = styled(PageTopArea)`
    margin-top : 180px;
    /* background-color :red; */
`
const PMiddleArea = styled.div`
    border-top : 4px solid var(--turtle-green);
`
const P_Data = styled(Pl_SectionData)`
`
const PZoomArea = styled.div`
    margin-top : 104px;
    margin-bottom : 20px;
    width : 100%;
    display: flex;
    justify-content : flex-end;
`
const PZoombtn = styled.div`
    width: 162px;
    height: 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: var(--turtle-green);
`
const PZoomText = styled.div`
     font-size: 14px;
     font-weight: bold;
     color: var(--white);
`


// Mobile
const MWrapper = styled.div`
    width : auto;
    padding : 0 16px 50px 16px;
    display : flex;
    justify-content : center;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 375px;
`
const MContents = styled(PageTopArea)`
    margin-top : 100px;
`
const MMiddleArea = styled.div`
    margin-top : 40px;
    border-top : 2px solid var(--turtle-green);
`
const M_Data = styled(Pl_SectionData)`
`

export default _Byob