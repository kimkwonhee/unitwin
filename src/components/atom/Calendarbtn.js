import React from 'react'
import styled from 'styled-components'

const Calendarbtn = ({title, calendar, onClick}) => {
    return (
        <Wrapper
            onClick={onClick}>
            <Title>{title}</Title>
            <Sub>{calendar}</Sub>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 282px;
    height : 62px;
    border: solid 2px #222222;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: #ffffff;
    cursor: pointer;
    color: #222222;

    &:hover {
        background-color: #222222;
        color: #ffffff;
    }
`

const Title = styled.div`
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    margin-right : 20px;
`

const Sub = styled.div`
    font-family: NotoSansKR;
    font-size: 20px;
    line-height: 1.5;
`

export default Calendarbtn