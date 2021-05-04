import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Menubtn from '../atom/Menubtn'
import p_menulogo from '../../images/menu_logo.png'
import m_menulogo from '../../images/mobile_menu_logo.png'
import m_menulogo_white from '../../images/mobile_menu_logo_white.png'
import m_menu from '../../images/mobile_menu_btn.png'
import m_menu_white from '../../images/mobile_menu_btn_white.png'
import m_close from '../../images/mobile_menu_close.png'
import Langbtn from '../atom/Langbtn'
import { Link, withRouter, useLocation } from 'react-router-dom'
import { Affix, Drawer } from 'antd'
import m_menu_close from '../../images/mobile_menu_close.png'
import m_menu_title from '../../images/mobile_menu_title.png'
import m_menu_cop1 from '../../images/mobile_cop_logo1.png'
import m_menu_cop2 from '../../images/mobile_cop_logo2.png'


const Menubar = withRouter(({ className }) => {
    const location = useLocation()
    const [drawerVisible, setDrawerVisible] = useState(false)
    
    const [scrollTop, setScrollTop] = useState(false)

    const onScrollChange = () => {
        if (window.pageYOffset < 24) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    }

    useEffect(() => {
        setScrollTop(location.pathname === '/unitwin/home' ? true : false)
        if (location.pathname === '/unitwin/home') {
            window.addEventListener('scroll', onScrollChange)
            
        }
        return () => window.removeEventListener('scroll', onScrollChange)
    }, [location.pathname])

    

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
            <Affix style={{ position: 'absolute', top: 0, left: 0, zIndex: 99}}>
                <MWrapper top={scrollTop} className={className}>
                    <MInner>
                        <MLinkTag to="/unitwin/home">
                            <MLogoImg src={scrollTop ? m_menulogo_white : m_menulogo} alt="logo" />
                        </MLinkTag>
                        <MMenuImg top={scrollTop} onClick={e=> setDrawerVisible(true)}/>
                    </MInner>
                </MWrapper>  
            </Affix>
            
            <Drawer
                title={null}
                placement={'right'}
                closable={false}
                onClose={() => setDrawerVisible(false)}
                visible={drawerVisible}
                key={'right'}
                footer={null}
                width={'100%'}
                bodyStyle={{padding:0}}
                >
                <DrawerWrapper>
                <DrawerHeader>
                    <PLangArea>
                        <Langbtn>KOR</Langbtn>
                        <Langbtn>ENG</Langbtn>
                    </PLangArea>
                    <MCloseImg onClick={e=> setDrawerVisible(false)} />
                </DrawerHeader>
                <DrawerTitleArea>
                    <img src={m_menu_title} />
                </DrawerTitleArea>
                <DrawerMenuList>
                    <DrawerMenuListItem>
                        <DrawerMenuTxt>
                            주간행사
                        </DrawerMenuTxt>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to={{
                            pathname: '/unitwin/plenary-session'
                        }}>
                            <DrawerMenuTxt>
                                기조발제
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to="/unitwin/session">
                            <DrawerMenuTxt>
                                주제세션
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to="/unitwin/presession-showcase">
                            <DrawerMenuTxt>
                                기획세션
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to="/unitwin/byob">
                            <DrawerMenuTxt>
                                BYOB
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to="/unitwin/closing-ceremony">
                            <DrawerMenuTxt>
                                폐회세션
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                </DrawerMenuList>
                <DrawerFooter>
                    <DrawerPrivacyBtn>개인정보처리방침</DrawerPrivacyBtn>
                    <DrawerFooterInfo>
                    제4회 유네스코 유니트윈 학술대회 운영사무국<br />
                    (주)프럼에이 (105-87-52236) 서울 마포구 성미산로23길 30-5<br /><br />
                    대표전화&nbsp;&nbsp;I&nbsp;&nbsp;02-733-1399<br />
                    운영시간&nbsp;&nbsp;I&nbsp;&nbsp;월-금 10:00 - 19:00 (주말, 공휴일 휴무)
                    </DrawerFooterInfo>
                    <DrawerCopLogo1 src={m_menu_cop1} />
                    <DrawerCopLogo2 src={m_menu_cop2} />
                    <DrawerDivider />
                    <DrawerCopyright>
                    ⓒ KOREA ARTS &amp; CULTURE EDUCATION SERVICE. All Rights Reserved. 
                    </DrawerCopyright>
                </DrawerFooter>
                </DrawerWrapper>
            </Drawer>

        </>    
    )
})

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
    width : 100%;
    height : 60px;
    z-index : 50;
    display : flex;
    justify-content : center;
    display : flex;
    box-shadow: ${props => props.top ? '0 0px 0px 0 #ddf2c7' : '0 1px 2px 0 #ddf2c7'};
    background : ${props => props.top ? 'transparent' : 'var(--white)'};
    transition: .3s;
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
    background : ${props => props.top ? `url(${m_menu_white});` : `url(${m_menu});`}
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
//Drawer
const DrawerWrapper = styled.div`
  width: 100%;
  
`

const DrawerHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`

const MCloseImg = styled.div`
    cursor: pointer;
    width : 24px;
    height : 60px;
    background : url(${m_menu_close});
`
const DrawerTitleArea = styled.div`
  margin-top: 28px;
  margin-bottom: 80px;
  padding: 0 40px;
`

const DrawerMenuList = styled.ul`
  width: 100%;
  padding: 16px;
  list-style: none;
  margin-bottom: 80px;
`

const DrawerMenuListItem = styled.li`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  &:hover {
    opacity: 0.8;
  }
`

const DrawerMenuTxt = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0;
  color: var(--black);
`

const DrawerFooter = styled.div`
  width: 100%;
  padding: 28px 16px 60px 16px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const DrawerPrivacyBtn = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: var(--turtle-green);
`

const DrawerFooterInfo = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--white);
  margin: 50px 0 40px 0;
`

const DrawerCopLogo1 = styled.img`
  margin-bottom: 12px;
`

const DrawerCopLogo2 = styled(DrawerCopLogo1)`
  margin-bottom: 0;
`

const DrawerDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #5f5f5f;
  margin: 60px 0 20px;
`

const DrawerCopyright = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: var(--white);
`

export default withRouter(Menubar)