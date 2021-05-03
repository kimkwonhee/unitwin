import React from 'react'
import styled from 'styled-components'
import backgroud1 from '../../../images/home_bg01.jpg'
import backgroud2 from '../../../images/home_bg02.png'
import logo from '../../../images/home_top_logo.png'
import title from '../../../images/home_title.png'
import Preregistrationbtn from '../../atom/Preregistrationbtn'
import PageTopArea from '../../molecules/PageTopArea'

const Home_top = () => {
    const p_topcontents = {
        title : '행사소개',
        contents : '한국문화예술교육진흥원은 "유니트윈-문화다양성과 지속가능발전을 위한 예술교육 연구회"의\n'
                 +'정회원으로서 예술교육의 성찰과 미래를 모색하기 위한 정기 학술대회를 개최합니다.\n\n'
                 +'제4회 유니트윈 학술대회는 "위기의 시대, 행동하는 예술교육"를 주제로 하여 예술교육의 원리와 사례가\n'
                 +'어떻게 오늘날의 세계가 마주한 사회적‧문화적 위기에 대해 심도 있기 기여할 수 있는지 논하려 합니다.',
        subcontents : '※ 유네스코 유니트윈 – 문화다양성과 지속발전가능한 예술교육 연구 모임\n'
                     +'(UNITWIN - Arts Education Research for Cultural Diversity and Sustainable Development)\n'
                     +'유네스코 산하 대학과 연구기관들의 협력망(네트워크)으로 INRAE(International Network of Research in Arts Education), ENO(European Network of Observatories in the Field of Arts and Cultural education), APAH(Asia-Pacific Arts Education Hub)의 회원들이 모여 2017년에 결속. 매년 정회원국들이 학술대회 순회 개최.'
    }

    const m_topcontents = {
        title : '행사소개',
        contents : '위기의 시대,\n'
                  + '모두가 알고 있었지만 기후위기, 다양성과 평등의 문제 등 많은 사회 문제들이 임박한 과제로 떠올랐습니다.'
                  + '우리는 예술가 및 학자들과 함께 예술교육이 사회적 문화적 위기에 어떻게 대응하고 영감을 줄 수 있을지 논의하고자 합니다.\n\n'
                  + '유니트윈을 통해 우리 모두 소셜 아티스트로서 위기 해결을 위한 동기부여가 되는 장이 될 것입니다.'
                  + '예술이 지닌 회복과 창의적인 행동의 기회를 예술교육이 주도하며 다양한 가능성을 모색하려 합니다.\n\n'
                  + '예술교육은 중요한 과제 해결을 위해 “위기의 시대, 행동하는 예술교육”이라는 주제로'
                  + '변화의 물결을 시작할 수 있는 촉발점이 될것입니다.'
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    <PLogoArea>
                        <PLogoimg src={logo} alt="mark"/>
                    </PLogoArea>
                    <PBackImgArea>
                        <PBgimg src={backgroud2} alt="mark" />
                    </PBackImgArea>
                    <PContentsArea>
                        <PImgTitle src={title} alt="title" />
                        <PCalender>2021. 05. 25(화) ~ 05.26(수)</PCalender>
                        <PApplybtn>사전신청하기</PApplybtn>
                        <PContents 
                            title={p_topcontents.title} 
                            contents={p_topcontents.contents}
                            subcontents={p_topcontents.subcontents}
                            subfontsize="20px"
                            homebtn={true}
                        />
                    </PContentsArea>
                </PInner>
            </PWrapper>
            <MWrapper>
                <MInner>
                    <MLogoArea>
                        <MLogoimg src={logo} alt="mark"/>
                    </MLogoArea>
                    <MBackImgArea>
                        <MBgimg src={backgroud2} alt="mark" />
                    </MBackImgArea>
                    <MContentsArea>
                        <MImgTitle src={title} alt="title" />
                        <MCalender>2021. 05. 25(화) ~ 05.26(수)</MCalender>
                        <MContents 
                            title={m_topcontents.title} 
                            contents={m_topcontents.contents}
                            subfontsize="20px"
                        />
                        <MApplybtn>사전신청하기</MApplybtn>
                    </MContentsArea>
                </MInner>
            </MWrapper>
        </>
    )
}

// PC
const PWrapper = styled.div`
    width : auto;
    height : 1270px;
    display : flex;
    justify-content : center;
    padding-bottom : 100px;
    background : url(${backgroud1});
    background-size : cover;

    @media all and (max-width:1199px) {
        display : none;
    }
`

const PInner = styled.div`
    position : relative;
    width : 1200px;
`

const PLogoArea = styled.div`
    position : absolute;
    top : 130px;
    right : 0; 
    z-index : 5;
`
const PLogoimg = styled.img`
    width : 152px;
    height : 77px;
`
const PBackImgArea = styled.div`
    position : absolute;
    top : 160px;
    right : 0;
    display : flex;
    justify-content : flex-end;
`
const PBgimg = styled.img`
    width : 680px;
    height : 680px;
`
const PContentsArea = styled.div`
    position : absolute;
    width : 100%;
    top : 207px;
    z-index : 2;
`
const PImgTitle = styled.img`
`
const PCalender = styled.div`
    padding : 40px 0 50px 0;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`
const PApplybtn = styled(Preregistrationbtn)`
`
const PContents = styled(PageTopArea)`
    margin-top : 180px;
    margin-bottom : 72px;
`


// Mobile
const MWrapper = styled.div`
    width : auto;
    height : 689px;
    padding : 0 16px 50px 16px; 
    display : flex;
    justify-content : center;
    background : url(${backgroud1});
    background-size : cover;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 375px;
`
const MLogoArea = styled.div`
    position : absolute;
    top : 68px;
    right : 0; 
    z-index : 5;
`
const MLogoimg = styled.img`
    width : 116px;
    height : 56px;
`
const MBackImgArea = styled.div`
    position : absolute;
    top : 68px;
    right : 0;
    display : flex;
    justify-content : flex-end;
`
const MBgimg = styled.img`
    width : 267px;
    height : 280px;
`
const MContentsArea = styled.div`
    position : absolute;
    top : 146px;
    width : 100%;
    z-index : 2;
`
const MImgTitle = styled.img`
    width : 277px;
`
const MCalender = styled.div`
    padding : 20px 0 55px 0;
    font-size: 14px;
    font-weight: bold;
    color: var(--black);
`
const MApplybtn = styled(Preregistrationbtn)`
    margin-top : 24px;
    width : 100%;
    height : 48px;
    font-size: 14px;
`
const MContents = styled(PageTopArea)`
`

export default Home_top