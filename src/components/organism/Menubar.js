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
                    <LogoImg src={menulogo} alt="logo" />
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
    height : 8.25vh;
    display : flex;
    justify-content : center;
    z-index : 50;
    border-bottom: solid 0.5px var(--brown-grey);
    background : var(--white);
    
    @media all and (max-width:767px) {
        /* display : none; */
    }
`
const LogoArea = styled.div`
    height : 100%;
    margin-right : 5.10vw;
`

const LogoImg = styled.img`
    width : 3.54vw;
    height : 8.25vh;
`

const MenuArea = styled.div`
    display : flex;
`
const LangArea = styled.div`
    width : 5vw;
    margin-left : 4.58vw;
    display : flex;
    align-items : center;
`
const LinkTag = styled(Link)`
    text-decoration : none !important;
`

export default withRouter(Menubar)