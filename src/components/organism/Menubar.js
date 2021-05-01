import React from 'react'
import styled from 'styled-components'
import Menubtn from '../atom/Menubtn'
import menulogo from '../../images/menu_logo.png'
import Langbtn from '../atom/Langbtn'
import { Link, withRouter } from 'react-router-dom'

const Menubar = ({className}) => {

    return (
        <Wrapper className={className}>
            <LinkTag to="/unitwin/home">
                <LogoArea>
                    <img src={menulogo} alt="logo" />
                </LogoArea>
            </LinkTag>
            <MenuArea>
                <Menubtn>주간행사</Menubtn>

                <LinkTag to="/unitwin/plenary-session">
                    <Menubtn>기조발제</Menubtn>
                </LinkTag>
                <LinkTag to="/unitwin/session">
                    <Menubtn>주제세션</Menubtn>
                </LinkTag>
                <LinkTag to="/unitwin/presession-showcase">
                    <Menubtn>기획세션</Menubtn>
                </LinkTag>
                <LinkTag to="/unitwin/byob">
                    <Menubtn>BYOB</Menubtn>
                </LinkTag>
                <LinkTag to="/unitwin/closing-ceremony">
                    <Menubtn>폐회 세션</Menubtn>
                </LinkTag>
                
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
    border-bottom: solid 0.5px var(--brown-grey);
    background : var(--white);
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
`
const LinkTag = styled(Link)`
    text-decoration : none !important;
`

export default withRouter(Menubar)