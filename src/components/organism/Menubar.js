import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Menubtn from '../atom/Menubtn'
import p_menulogo from '../../images/menu_logo.png'
import m_menulogo from '../../images/mobile_menu_logo.png'
import m_menulogo_white from '../../images/mobile_menu_logo_white.png'
import m_menu from '../../images/mobile_menu_btn.png'
import m_menu_white from '../../images/mobile_menu_btn_white.png'
import Langbtn from '../atom/Langbtn'
import { Link, withRouter, useLocation } from 'react-router-dom'
import { Affix, Drawer } from 'antd'
import m_menu_close from '../../images/mobile_menu_close.png'
import { useDispatch } from 'react-redux'
import { changkr, changen } from '../../modules/changlang'
import color from '../../style/color'

const Menubar = withRouter(({ className, curlang }) => {

    const dispatch = useDispatch();
    const onChangKr = () => dispatch(changkr());
    const onChangEn = () => dispatch(changen());

    const location = useLocation()
    const [drawerVisible, setDrawerVisible] = useState(false)
    const [scrollTop, setScrollTop] = useState(false)
    const onScrollChange = () => {
        if (window.pageYOffset <= 0) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    }
    const onScreenResize = () => {
        if (window.innerWidth >= 1200) {
            setDrawerVisible(false)
        }
    }
    useEffect(() => {
        setScrollTop(location.pathname === '/2021/unitwin2021/home/' ? true : false)
        if (location.pathname === '/2021/unitwin2021/home/') {
            window.addEventListener('scroll', onScrollChange)
        }
        return () => window.removeEventListener('scroll', onScrollChange)
    }, [location.pathname])

    useEffect(() => {
        window.addEventListener('resize', onScreenResize)
        return () => window.removeEventListener('resize', onScreenResize)
    }, [location.pathname])


    const p_detaildata = curlang.p_data.menuber;
    const m_detaildata = curlang.m_data.menuber;
    const m_footerdata = curlang.m_data.footer;

    const [langState, setLangState] = useState('kr');

    return (
        <>
            <PWrapper className={className}>
                <PInner>
                    <PLinkTag to="/2021/unitwin2021/home/">
                        <PLogoImg src={p_menulogo} alt="logo" />
                    </PLinkTag>
                    <PMenuArea>
                        <Menubtn id="1" link={'http://www.arteweek.kr/2021/views/opening.php'}>
                            {p_detaildata.text1}
                        </Menubtn>
                        <PLinkTag to="/2021/unitwin2021/plenary-session">    
                            <Menubtn id="2">{p_detaildata.text2}</Menubtn>
                        </PLinkTag>
                        <PLinkTag to="/2021/unitwin2021/session">
                            <Menubtn id="3">{p_detaildata.text3}</Menubtn>
                        </PLinkTag>
                        {/* <PLinkTag to="/2021/unitwin2021/presession-showcase"> */}
                            <Menubtn id="4">{p_detaildata.text4}</Menubtn>
                        {/* </PLinkTag> */}
                        <PLinkTag to="/2021/unitwin2021/byob">
                            <Menubtn id="5">{p_detaildata.text5}</Menubtn>
                        </PLinkTag>
                        {/* <PLinkTag to="/2021/unitwin2021/closing-ceremony"> */}
                            <Menubtn id="6">{p_detaildata.text6}</Menubtn>
                        {/* </PLinkTag> */}
                    </PMenuArea>
                    <PLangArea>
                        <Langbtn 
                            id='kr' 
                            langstate={langState} 
                            onClick={(e)=> { onChangKr(); setLangState('kr'); }}
                            >
                                KOR
                            </Langbtn>
                        <Langbtn 
                            id='en' 
                            langstate={langState}  
                            onClick={(e)=>{ onChangEn(); setLangState('en');}}>
                                ENG
                        </Langbtn>
                    </PLangArea>
                </PInner>
            </PWrapper>

            {/* moblie */}
            <Affix style={{ position: 'absolute', top: 0, left: '0', zIndex: 99, }}>
                <MWrapper top={scrollTop} className={className}>
                    <MInner>
                        <MLinkTag to="/2021/unitwin2021/home">
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
                        <Langbtn 
                            id='kr' 
                            langstate={langState} 
                            onClick={(e)=> { onChangKr(); setLangState('kr'); }}
                            >
                                KOR
                            </Langbtn>
                        <Langbtn 
                            id='en' 
                            langstate={langState}  
                            onClick={(e)=>{ onChangEn(); setLangState('en');}}>
                                ENG
                        </Langbtn>
                    </PLangArea>
                    <MCloseImg onClick={e=> setDrawerVisible(false)} />
                </DrawerHeader>
                <DrawerTitleArea>
                    <MtitleImg langstate={langState} src={curlang.m_data.home_top.img} alt="menu"/>
                    <MCalender>{curlang.m_data.home_top.time}</MCalender>
                </DrawerTitleArea>
                <DrawerMenuList>
                    <DrawerMenuListItem>
                        <DrawerMenuTxt id="1">
                            {m_detaildata.text1}
                        </DrawerMenuTxt>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to={{
                            pathname: '/2021/unitwin2021/plenary-session'
                        }}>
                            <DrawerMenuTxt id="2">
                            {m_detaildata.text2}
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to="/2021/unitwin2021/session">
                            <DrawerMenuTxt id="3">
                            {m_detaildata.text3}
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        {/* <Link onClick={e=> setDrawerVisible(false)} to="/2021/unitwin2021/presession-showcase"> */}
                            <DrawerMenuTxt id="4">
                            {m_detaildata.text4}
                            </DrawerMenuTxt>
                        {/* </Link> */}
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        <Link onClick={e=> setDrawerVisible(false)} to="/2021/unitwin2021/byob">
                            <DrawerMenuTxt id="5">
                            {m_detaildata.text5}
                            </DrawerMenuTxt>
                        </Link>
                    </DrawerMenuListItem>
                    <DrawerMenuListItem>
                        {/* <Link onClick={e=> setDrawerVisible(false)} to="/2021/unitwin2021/closing-ceremony"> */}
                            <DrawerMenuTxt id="6">
                            {m_detaildata.text6} 
                            </DrawerMenuTxt>
                        {/* </Link> */}
                    </DrawerMenuListItem>
                </DrawerMenuList>
                <DrawerFooter>
                    <DrawerPrivacyBtn>{m_footerdata.ftpolicy}</DrawerPrivacyBtn>
                    <DrawerFooterInfo>
                        {m_footerdata.ftaddress}<br /><br />{m_footerdata.fttel}<br />{m_footerdata.activetime}
                    </DrawerFooterInfo>
                    <DrawerCopLogo1 src={m_footerdata.ftlogo_1} alt={m_footerdata.ftlogo_1_alt}/>
                    <DrawerCopLogo2 src={m_footerdata.ftlogo_2} alt={m_footerdata.ftlogo_2_alt}/>
                    <DrawerDivider />
                    <DrawerCopyright>
                    {m_footerdata.ftcopyright}
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
    background : ${color.white};
    
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
    color: ${color.black};
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
    width : 100vw;
    height : 60px;
    z-index : 50;
    display : flex;
    justify-content : center;
    display : flex;
    box-shadow: ${props => props.top ? '0 0px 0px 0 #ddf2c7' : '0 1px 2px 0 #ddf2c7'};
    background : ${props => props.top ? 'transparent' : color.white};
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
    background : ${props => props.top ? `url(${m_menu_white});` : `url(${m_menu});`};
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
const MtitleImg = styled.img`
    width : ${props => props.langstate =='kr' ? '270px' : '366px' };
    height : ${props => props.langstate =='kr' ? '124px' : '57px' };
`
const MCalender = styled.div`
    padding : 20px 0 30px 0;
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
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
  color: ${props => (props.id== 4) || (props.id== 6) 
             ?  color.brown_grey 
             : color.black };
`
const DrawerFooter = styled.div`
  width: 100%;
  padding: 28px 16px 60px 16px;
  background-color: ${color.black};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const DrawerPrivacyBtn = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: ${color.turtle_green};
`
const DrawerFooterInfo = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${color.white};
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
  color: ${color.white};
`
export default withRouter(Menubar)