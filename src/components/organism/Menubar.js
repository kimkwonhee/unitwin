import React from 'react'
import styled from 'styled-components'
import Menubtn from '../atom/Menubtn'
import menulogo from '../../images/menu_logo.png'
import Langbtn from '../atom/Langbtn'


const Menubar = () => {

    return (
        <Wrapper>
            <LogoArea>
                <img src={menulogo} alt="logo" />
            </LogoArea>
            <MenuArea>
                <Menubtn>주간행사</Menubtn>
                <Menubtn>기조발제</Menubtn>
                <Menubtn>주제세션</Menubtn>
                <Menubtn>기획세션</Menubtn>
                <Menubtn>BYOB</Menubtn>
                <Menubtn>폐회 세션</Menubtn>
            </MenuArea>
            <LangArea>
                <Langbtn>KOR</Langbtn>
                <Langbtn>ENG</Langbtn>
            </LangArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position : fixed;
    width : 100%;
    height : 80px;
    display : flex;
    justify-content : center;
    z-index : 50;
    border: solid 0.5px #aaaaaa;
    background : #ffffff;
`

const LogoArea = styled.div`
    width : 80px;
    margin-right : 98px;
`
const MenuArea = styled.div`
    display : flex;
`

const LangArea = styled.div`
    width : 96px;
    margin-left : 88px;
    display : flex;
    align-items : center;
    /* background : blue; */
`

export default Menubar