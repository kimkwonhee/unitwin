import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Menubtn from '../atom/Menubtn'
import p_menulogo from '../../images/menu_logo.png'
import m_menulogo from '../../images/mobile_menu_logo.png'
import m_menu from '../../images/mobile_menu_btn.png'
import m_close from '../../images/mobile_menu_close.png'
import Langbtn from '../atom/Langbtn'
import { Link, withRouter } from 'react-router-dom'
import Drawer from 'rc-drawer';

const Menubar = ({className}) => {
    const [menustatus, setMenustatus] = useState(false);

    const onSwitch = (e) => {
        setMenustatus(!menustatus);
    }
    const onClose = (e) => {
        setMenustatus(false);
    }

    return (
        <>
            <PWrapper className={className}>
                <PInner>
                    <PLinkTag to="/unitwin/home">
                        <PLogoImg src={p_menulogo} alt="logo" />
                    </PLinkTag>
                    <PMenuArea>
                        <Menubtn>주간행사</Menubtn>
                        <PLinkTag to="/unitwin/plenary-session">    
                            <Menubtn>기조발제</Menubtn>
                        </PLinkTag>
                        <PLinkTag to="/unitwin/session">
                            <Menubtn>주제세션</Menubtn>
                        </PLinkTag>
                        <PLinkTag to="/unitwin/presession-showcase">
                            <Menubtn>기획세션</Menubtn>
                        </PLinkTag>
                        <PLinkTag to="/unitwin/byob">
                            <Menubtn>BYOB</Menubtn>
                        </PLinkTag>
                        <PLinkTag to="/unitwin/closing-ceremony">
                            <Menubtn>폐회세션</Menubtn>
                        </PLinkTag>
                    </PMenuArea>
                    <PLangArea>
                        <Langbtn>KOR</Langbtn>
                        <Langbtn>ENG</Langbtn>
                    </PLangArea>
                </PInner>
            </PWrapper>
            <MWrapper className={className}>
                <MInner>
                    <MLinkTag to="/unitwin/home">
                        <MLogoImg src={m_menulogo} alt="logo" />
                    </MLinkTag>
                    <MMenuImg onClick={onSwitch}/>
                </MInner>
            </MWrapper>  
            {/* <Drawer
                open={menustatus}
                onClose={onClose}
                handler={false}
                width="100vw"
                height="100vh"
            >
                <CWrapper status={menustatus} className={className}>
                    <CInner>
                        <CLinkTag to="/unitwin/home">
                            <MLogoImg src={m_menulogo} alt="logo" />
                        </CLinkTag>
                        <CMenuImg onClick={onSwitch}/>
                    </CInner>
                </CWrapper>
            </Drawer> */}
        </>    
    )
}

// PC
const PWrapper = styled.div`
    position : fixed;
    width : 100%;
    height : 80px;
    display : flex;
    justify-content : center;
    z-index : 50;
    box-shadow: 0 2px 4px 0 #ddf2c7;
    background : var(--white);
    
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    width : 1200px;
    display : flex;
    justify-content : space-between;
`
const PLinkTag = styled(Link)`
    text-decoration : none !important;
`
const PLogoImg = styled.img`
    width : 68px;
    height : 80px;
`
const PMenuArea = styled.div`
    display : flex;
`
const PLangArea = styled.div`
    width : 96px;
    display : flex;
    align-items : center;
`

const MWrapper = styled.div`
    position : fixed;
    width : 100%;
    height : 60px;
    z-index : 50;
    display : flex;
    justify-content : center;
    display : flex;
    box-shadow: 0 1px 2px 0 #ddf2c7;
    background : var(--white);
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 375px;
    height : 100%;
    padding : 0 16px;
    display : flex;
    justify-content : space-between;
`
const MLinkTag = styled(Link)`
    text-decoration : none !important;
`
const MLogoImg = styled.img`
    width : 45px;
    height : 60px;
`
const MMenuImg = styled.div`
    cursor: pointer;
    width : 24px;
    height : 60px;
    background : url(${m_menu});
`
// popup
const CWrapper = styled.div`
    height : 60px;
    z-index : 50;
    display : ${props=> props.status ? 'flex' : 'none'};
    justify-content : center;
    display : flex;
    box-shadow: 0 1px 2px 0 #ddf2c7;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const CInner = styled.div`
    position : relative;
    width : 375px;
    height : 100%;
    padding : 0 16px;
    display : flex;
    justify-content : space-between;
`
const CLinkTag = styled(Link)`
    text-decoration : none !important;
`
const CLogoImg = styled.img`
    width : 45px;
    height : 60px;
`
const CMenuImg = styled.div`
    cursor: pointer;
    width : 24px;
    height : 60px;
    background : url(${m_close});
`


export default withRouter(Menubar)