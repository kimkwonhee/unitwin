import React from 'react'
import styled from 'styled-components'
import Themebtn from '../atom/Themebtn'

const ThemebtnGroup = () => {
    
    
    
    return (
        <Wrapper>
            <Themebtn padding="35px">전체</Themebtn>
            <Themebtn>팬데믹 / 지속가능예술 / 온라인워크숍</Themebtn>
            <Themebtn>청소년정신건강 / 연극교육 / 심리</Themebtn>
            <Themebtn>글로벌 / 다양성 / 평등</Themebtn>
            <Themebtn>지속가능성 / 환경 / 국제적</Themebtn>
            <Themebtn>다양성포용 / 복원 / 성찰 / 디지털</Themebtn>
            <Themebtn>예술교육가 / 온라인관람 / 창의세대</Themebtn>
            <Themebtn>평등 / LGBTQ / 공존</Themebtn>
            <Themebtn>사회적예술 / 뉴노멀 / 과도기</Themebtn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 892px;
    display : flex;
    flex-wrap : wrap;
    /* background-color : red; */
`

export default ThemebtnGroup