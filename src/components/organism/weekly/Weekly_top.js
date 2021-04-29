import React from 'react'
import styled from 'styled-components'
import backgroud1 from '../../../images/home_bg01.jpg'
import backgroud2 from '../../../images/home_bg02.png'
import logo from '../../../images/weekly_top_logo.png'

const Weekly_top = () => {
    return (
        <Wrapper>
            <Logoimg src={logo} alt="mark"/>
            <Bgimg src={backgroud2} alt="mark" />
            <ContentsArea>

            </ContentsArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 1140px;
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
    height : 960px;
    background : gray;
    z-index : 2;
`

export default Weekly_top