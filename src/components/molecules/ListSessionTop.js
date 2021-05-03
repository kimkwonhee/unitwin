import React from 'react'
import styled from 'styled-components'

const ListSessionTop = ({className, title, subject, time}) => {
    
    return (
        <Wrapper className={className}>
            <Line />
            <Title>{title}</Title>
            <Subject>{subject}</Subject>
            <Time>{time}</Time>
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