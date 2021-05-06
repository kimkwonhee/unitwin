import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const ListSessionTop = ({className, title, subject, time}) => {
    
    return (
        <>
            <Wrapper className={className}>
                <Line />
                <Title>{title}</Title>
                <Subject>{subject}</Subject>
                <Time>{time}</Time>
            </Wrapper>
        </>
        
    )
}

const Wrapper = styled.div`
    margin-top : 180px;
    /* background-color : gray; */
`
const Line = styled.div`
    width : 300px;
    height : 4px;
    background-color : ${color.black};
`
const Title = styled.div`
    margin-top : 12px;
    margin-bottom : 12px;
    font-size: 28px;
    font-weight: 900;
    white-space: pre-line;
    color: ${color.black};
`
const Subject = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const Time = styled.div`
    margin-top : 4px;
    margin-bottom : 40px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`

export default ListSessionTop