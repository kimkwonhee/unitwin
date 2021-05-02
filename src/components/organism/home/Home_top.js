import React from 'react'
import styled from 'styled-components'
import backgroud1 from '../../../images/home_bg01.jpg'
import backgroud2 from '../../../images/home_bg02.png'
import logo from '../../../images/home_top_logo.png'
import title from '../../../images/home_title.png'
import Preregistrationbtn from '../../atom/Preregistrationbtn'
import PageTopArea from '../../molecules/PageTopArea'

const Home_top = () => {
    
    const pctopcontents = {
        title : '행사소개',
        contents : '위기의 시대,\n'
                  + '모두가 알고 있었지만 기후위기, 다양성과 평등의 문제 등 많은 사회 문제들이 임박한 과제로 떠올랐습니다.\n'
                  + '우리는 예술가 및 학자들과 함께 예술교육이 사회적 문화적 위기에 어떻게 대응하고 영감을 줄 수 있을지 논의하고자 합니다.\n\n'
                  + '유니트윈을 통해 우리 모두 소셜 아티스트로서 위기 해결을 위한 동기부여가 되는 장이 될 것입니다.\n'
                  + '예술이 지닌 회복과 창의적인 행동의 기회를 예술교육이 주도하며 다양한 가능성을 모색하려 합니다.\n\n'
                  + '예술교육은 중요한 과제 해결을 위해 “위기의 시대, 행동하는 예술교육”이라는 주제로\n'
                  + '변화의 물결을 시작할 수 있는 촉발점이 될것입니다.'
    } 

    return (
        <PWrapper>
            <Inner>
                <LogoArea>
                    <Logoimg src={logo} alt="mark"/>
                </LogoArea>
                <BackImgArea>
                    <Bgimg src={backgroud2} alt="mark" />
                </BackImgArea>
                <ContentsArea>
                    <ImgTitle src={title} alt="title" />
                    <Calender>2021. 05. 25(화) ~ 05.26(수)</Calender>
                    <Applybtn>사전신청하기</Applybtn>
                    <Contents 
                        title={pctopcontents.title} 
                        contents={pctopcontents.contents}
                        subfontsize="20px"
                    />
                </ContentsArea>
            </Inner>
        </PWrapper>
    )
}

const PWrapper = styled.div`
    width : auto;
    height : 1183px;
    display : flex;
    justify-content : center;
    padding-bottom : 100px;
    background : url(${backgroud1});
    background-size : cover;

    @media all and (max-width:1199px) {
        height : 749px;
        padding-right :16px;
        padding-left :16px;
        padding-bottom : 50px;
    }
`
const Inner = styled.div`
    position : relative;
    width : 1200px;
    
    /* background-color : red; */
    @media all and (max-width:1199px) {
        width : 375px;
    }
`
const LogoArea = styled.div`
    position : absolute;
    top : 130px;
    right : 0; 
    z-index : 5;
    
    @media all and (max-width:1199px) {
        top : 68px;
    }
`
const Logoimg = styled.img`
    width : 152px;
    height : 77px;

    @media all and (max-width:1199px) {
        width : 116px;
        height : 56px;
    }
`
const BackImgArea = styled.div`
    position : absolute;
    top : 160px;
    right : 0;
    display : flex;
    justify-content : flex-end;

    @media all and (max-width:1199px) {
        top : 68px;
    }
`
const Bgimg = styled.img`
    width : 680px;
    
    @media all and (max-width:1199px) {
        width : 267px;
        height : 280px;
    }
`
const ContentsArea = styled.div`
    position : absolute;
    width : 100%;
    top : 207px;
    z-index : 2;

    @media all and (max-width:1199px) {
        top : 146px;
        height :600px;
    }
`
const ImgTitle = styled.img`
    @media all and (max-width:1199px) {
        width : 277px;
    }
`
const Calender = styled.div`
    padding : 40px 0 50px 0;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);

    @media all and (max-width:1199px) {
        padding-top : 20px;
        font-size: 14px;
    }
`
const Applybtn = styled(Preregistrationbtn)`
    @media all and (max-width:1199px) {
        position : absolute;
        bottom : 0;
        width : 99%;
        height : 48px;
        font-size: 14px;
    }
`

const Contents = styled(PageTopArea)`
    margin-top : 180px;
    margin-bottom : 72px;

    @media all and (max-width:1199px) {
        position : absolute;
        top : 0;
        padding-top : 55px;
    }
`


export default Home_top