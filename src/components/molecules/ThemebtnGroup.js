import React from 'react'
import styled from 'styled-components'
import Themebtn from '../atom/Themebtn'

const ThemebtnGroup = ({onSelctCatagry, selectedcatagory}) => {
    
   return (
        <Wrapper>
            <Themebtn padding="35px" value="all" onClick={(e) => onSelctCatagry('all')} selectedcatagory={selectedcatagory}>전체</Themebtn>
            <Themebtn value="팬데믹" onClick={(e) => onSelctCatagry('팬데믹')} selectedcatagory={selectedcatagory}>팬데믹 / 지속가능예술 / 온라인워크숍</Themebtn>
            <Themebtn value="청소년정신건강" onClick={(e) => onSelctCatagry('청소년정신건강')} selectedcatagory={selectedcatagory}>청소년정신건강 / 연극교육 / 심리</Themebtn>
            <Themebtn value="글로벌" onClick={(e) => onSelctCatagry('글로벌')} selectedcatagory={selectedcatagory}>글로벌 / 다양성 / 평등</Themebtn>
            <Themebtn value="지속가능성" onClick={(e) => onSelctCatagry('지속가능성')} selectedcatagory={selectedcatagory}>지속가능성 / 환경 / 국제적</Themebtn>
            <Themebtn value="다양성포용" onClick={(e) => onSelctCatagry('다양성포용')} selectedcatagory={selectedcatagory}>다양성포용 / 복원 / 성찰 / 디지털</Themebtn>
            <Themebtn value="예술교육가" onClick={(e) => onSelctCatagry('예술교육가')} selectedcatagory={selectedcatagory}>예술교육가 / 온라인관람 / 창의세대</Themebtn>
            <Themebtn value="평등" onClick={(e) => onSelctCatagry('평등')} selectedcatagory={selectedcatagory}>평등 / LGBTQ / 공존</Themebtn>
            <Themebtn value="사회적예술" onClick={(e) => onSelctCatagry('사회적예술')} selectedcatagory={selectedcatagory}>사회적예술 / 뉴노멀 / 과도기</Themebtn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 892px;
    display : flex;
    flex-wrap : wrap;
`

export default ThemebtnGroup