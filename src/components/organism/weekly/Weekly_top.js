import React from 'react'
import styled from 'styled-components'
import backgroud1 from '../../../images/home_bg01.jpg'
import backgroud2 from '../../../images/home_bg02.png'
import logo from '../../../images/home_top_logo.png'
import title from '../../../images/home_title.png'
import Preregistrationbtn from '../../atom/Preregistrationbtn'

const Weekly_top = () => {
    return (
        <Wrapper>
            <Logoimg src={logo} alt="mark"/>
            <Bgimg src={backgroud2} alt="mark" />
            <ContentsArea>
                <ImgTitle src={title} alt="title" />
                <Calender>2021. 05. 25(화) ~ 05.26(수)</Calender>
                <Preregistrationbtn>사전신청하기</Preregistrationbtn>
                <EventArea>
                    <TitleArea>
                        <Title>행사 소개</Title>
                    </TitleArea>
                    <Contents>
                    위기의 시대,<br />모두가 알고 있었지만 기후위기, 다양성과 평등의 문제 등 많은 사회 문제들이 임박한 과제로 떠올랐습니다. <br />
                    우리는 예술가 및 학자들과 함께 예술교육이 사회적 문화적 위기에 어떻게 대응하고 영감을 줄 수 있을지 논의하고자 합니다. <br />
                    <br />
                    유니트윈을 통해 우리 모두 소셜 아티스트로서 위기 해결을 위한 동기부여가 되는 장이 될 것입니다. <br />
                    예술이 지닌 회복과 창의적인 행동의 기회를 예술교육이 주도하며 다양한 가능성을 모색하려 합니다. <br />
                    <br />
                    예술교육은 중요한 과제 해결을 위해 “위기의 시대, 행동하는 예술교육”이라는 주제로 <br />
                    변화의 물결을 시작할 수 있는 촉발점이 될것입니다.
                    </Contents>
                </EventArea>
            </ContentsArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 1240px;
    display : flex;
    justify-content : center;
    background : url(${backgroud1});
`

const Logoimg = styled.img`
    position : absolute;
    right : 382px;
    top : 130px;
    z-index : 5;
`
const Bgimg = styled.img`
    position : absolute;
    right : 374px;
    top : 160px;
`
const ContentsArea = styled.div`
    position : absolute;
    top : 207px;
    width : 1200px;
    /* height : 960px; */
    /* background : gray; */
    z-index : 2;
`
const ImgTitle = styled.img`
    margin-bottom : 40px;
`
const Calender = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.8;
    color: #222222;
    margin-bottom : 50px;
`
const EventArea = styled.div`
    width : 1200px;
    margin-top : 180px;
    display : flex;
    /* background-color : red; */
`

const TitleArea = styled.div`
    width : 248px;
    height : 80px;
    border-top : 4px solid #222222;
    display : flex;
    align-items : center;
    margin-right : 62px;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    color: #222222;
`

const Contents = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    color: #222222;
    /* background-color : blue; */
`


export default Weekly_top