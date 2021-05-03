import React from 'react'
import styled from 'styled-components'

const ListSessionTop = ({title, subject, time}) => {
    
    return (
        <Wrapper>
            <Line />
            <Title>COVID-19 대유행 기간 동안 케냐 대학 학생들의<br />석방, 구호, 성찰 및 복원을 촉진하기 위한 미술 치료 사용</Title>
            <Subject>교실 속의 예술</Subject>
            <Time>05.26(수) 13:40 ~ 15:10</Time>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top : 180px;
    /* background-color : gray; */
`
const Line = styled.div`
    width : 300px;
    height : 4px;
    background-color : var(--black);
`
const Title = styled.div`
    margin-top : 12px;
    margin-bottom : 12px;
    font-size: 28px;
    font-weight: 900;
    white-space: pre-line;
    color: var(--black);
`
const Subject = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: var(--turtle-green);
`
const Time = styled.div`
    margin-top : 4px;
    margin-bottom : 40px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`

export default ListSessionTop