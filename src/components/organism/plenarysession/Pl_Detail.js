import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ListSession from '../../molecules/ListSession'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import mobileviewbtn from '../../atom/mobileviewbtn'
import Downloadbtn from '../../atom/Downloadbtn'
import { useSelector } from 'react-redux'
import color from '../../../style/color'
import { Affix } from 'antd'
import env from '../../../modules/env'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet"

const Pl_Detail = ({match, location}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const chatPRef = useRef(null);
    const chatMRef = useRef(null);

    useEffect(() => {
        const gaSetting = async () => {
            await ReactGA.initialize('G-8BW0WPEKCF')
            await ReactGA.set({
                page: window.location.pathname + window.location.search
            })
            await ReactGA.pageview(window.location.pathname + window.location.search)
        }
        gaSetting()
    })

    useEffect(() => {
        window.scrollTo(0,0);
        const onScroll = () => {
            let scrollTop = document.documentElement.scrollTop
            if (scrollTop > chatDef.scroll) {
                var result = chatDef.height - (scrollTop - chatDef.scroll)
                chatPRef.current.style.height = result + 'px'
            }
        }
        // Chat Scroll
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll' , onScroll);
    }, [curlang]);

    // 채팅 언어 변경
    useEffect(() => {
        var Pframe = chatPRef.current;
        var Mframe = chatMRef.current;
        var Pcurrent = Pframe.contentWindow || Pframe.contentDocument;
        var Mcurrent = Mframe.contentWindow || Mframe.contentDocument;

        setTimeout(() => {
            try {
                Pcurrent.app.lang = curlang.status
                Mcurrent.app.lang = curlang.status
            } catch(err){
                setTimeout(() => {
                    try {
                        Pcurrent.app.lang = curlang.status
                        Mcurrent.app.lang = curlang.status
                    } catch(err){}
                }, 1000);
            };
        }, 10);
    }, [curlang]);


    let hashtag = location.hash

    useEffect(() => {
        const handleWhell = (e) => {
            console.log(window.scrollY);
        }
        window.addEventListener("mousewheel", handleWhell);
        return () => window.removeEventListener("mousewheel", handleWhell);       
    }, []);


    let pathname = match.params.detail
    let langstatus = curlang.status
    let halmet_title = ''

    useEffect(() => {
        
    },[]);

    const p_detaildata = curlang.p_data.pl_session_detail;
    const m_detaildata = curlang.m_data.pl_session_detail;

    
    
    // PC
    let P_topsection = null
    let P_videosection = null
    let P_contentsection = null
    let P_chatlink = null

    // mobile
    let M_topsection = null
    let M_videosection = null
    let M_contentsection = null
    let M_videotext = null
    let M_downbtn = null
    let M_chatlink = null
    let M_download_link = null

    
    let chatDef = {
        scroll: 1150,
        height: 600
    }

    if (pathname == '1') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 980, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 1150, height: 600 }
        }

        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/plenary-session/1" />

        P_topsection = <PTop title={p_detaildata.wagner_part.title} time={p_detaildata.wagner_part.time} />
        M_topsection = <MTop title={m_detaildata.wagner_part.title} time={m_detaildata.wagner_part.time} />
        
        P_videosection = <PVideo 
                            discription={p_detaildata.wagner_part.video_text} 
                            down={p_detaildata.wagner_part.download} 
                            youtube={p_detaildata.wagner_part.youtube}
                            downlink={p_detaildata.wagner_part.downlink}
                            />
        M_videosection = <MVideo youtube={m_detaildata.wagner_part.youtube}/>
        
        P_contentsection = <PSection data={p_detaildata.wagner_part.list} />
        M_contentsection = <MSection data={m_detaildata.wagner_part.list} />
        

        M_videotext = m_detaildata.wagner_part.video_text
        M_downbtn = m_detaildata.wagner_part.download
        M_download_link = m_detaildata.wagner_part.downlink

        P_chatlink = env.chatPath + p_detaildata.wagner_part.chatlink
        M_chatlink = env.chatPath + m_detaildata.wagner_part.chatlink
        
    }
    else if (pathname == '2') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 850, height: 600 }
        } else {
            chatDef = { scroll: 1050, height: 600 }
        }

        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/plenary-session/2" />
        P_topsection = <PTop title={p_detaildata.jorissen_part.title} time={p_detaildata.jorissen_part.time} />
        M_topsection = <MTop title={m_detaildata.jorissen_part.title} time={m_detaildata.jorissen_part.time} />
        
        P_videosection = <PVideo 
                            discription={p_detaildata.jorissen_part.video_text} 
                            down={p_detaildata.jorissen_part.download} 
                            youtube={p_detaildata.jorissen_part.youtube}
                            downlink={p_detaildata.jorissen_part.downlink}
                            />
        M_videosection = <MVideo youtube={m_detaildata.jorissen_part.youtube}/>
        
        P_contentsection = <PSection data={p_detaildata.jorissen_part.list} />
        M_contentsection =<MSection data={m_detaildata.jorissen_part.list} />
        
        M_videotext = m_detaildata.jorissen_part.video_text
        M_downbtn = m_detaildata.jorissen_part.download
        M_download_link = m_detaildata.jorissen_part.downlink

        P_chatlink = env.chatPath + p_detaildata.jorissen_part.chatlink
        M_chatlink = env.chatPath + m_detaildata.jorissen_part.chatlink
    }

    const [status, setStatus]  = useState('discription');

    return (
        <>
            {halmet_title}
            <PWrapper>
                <PInner>
                   {P_topsection}
                    <PCenterArea>
                        <PLeftArea>
                            {P_videosection}
                            <PContentsArea>
                                {P_contentsection}
                            </PContentsArea>
                        </PLeftArea>
                        <Affix offsetTop={100}>
                            <PRightArea>
                                <PChatLine />
                                <PChatArea>
                                    <PChatText>{curlang.p_data.realchating}</PChatText>
                                </PChatArea>
                                <PChat ref={chatPRef} src={P_chatlink} />
                            </PRightArea>
                        </Affix>
                        
                    </PCenterArea>
                </PInner>
            </PWrapper>

            {/* Mobile */}
            <MWrapper>
                <MTopArea>
                    {M_topsection}
                </MTopArea>
                <MVideoArea>
                    {M_videosection}
                </MVideoArea>
                <MViewchangeArea>
                    <MViewbtn 
                        id="discription"
                        status={status}
                        onClick={()=> setStatus('discription')}
                    >
                        {curlang.m_data.lecture}
                    </MViewbtn>
                    <MViewbtn 
                        id="chat"
                        status={status}
                        onClick={()=> setStatus('chat')}
                    >
                        {curlang.m_data.realchating}
                    </MViewbtn>
                </MViewchangeArea>
                <MDetailSection status={status}>
                    <MVideoText>{M_videotext}</MVideoText>
                    <MDownlodebtn 
                        down={M_downbtn} 
                        downlink={M_download_link}
                        status={langstatus}
                    >
                        {curlang.m_data.classdownload}
                    </MDownlodebtn>
                    {M_contentsection}
                </MDetailSection>
                <MChatSection status={status}>
                    <MChatLine />
                    <MChatArea>
                        <MChatText>{curlang.m_data.realchating}</MChatText>
                    </MChatArea>
                    <MChat ref={chatMRef} src={M_chatlink} />
                </MChatSection>
            </MWrapper>
        </>
    )
}

// PC
const PWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    margin-bottom : 200px;
    
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    width : 1200px;
`
const PTop = styled(ListSessionTop)`
`
const PCenterArea = styled.div`
    display : flex;
    justify-content : space-between;
`
const PLeftArea = styled.div`
    width : 800px;
`
const PRightArea = styled.div`
    width : 380px;
    height : 600px;
`
const PVideo = styled(ListVideoSession)`
`
const PContentsArea = styled.div`
    padding-top : 20px;
`
const PSection = styled(ListSession)`
    border-top : 1px solid ${color.turtle_green};
    margin-top : 60px;
`
const PChat = styled.iframe`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    word-break: keep-all;
`
const PChatLine = styled.div`
    width : 100%;
    height : 4px;
    background : black;
`
const PChatArea = styled.div`
    width : 100%;
    height : 61px;
    padding : 16px;
`
const PChatText = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    color: ${color.black};
`

//mobile
const MWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : auto;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MTopArea = styled.div`
    position : relative;
    width : 375px;
    margin-bottom : 40px;

    @media all and (max-width: 375px) {
        padding: 0 16px;
    }
`
const MVideoArea = styled.div`
    position : relative;
    max-width : 375px;
`
const MViewchangeArea = styled.div`
    display : flex;
    width : 375px;
    height : 48px;
    margin-bottom : 28px;
`
const MTop = styled(ListSessionTop)`
`
const MVideo = styled(ListVideoSession)`
`
const MViewbtn = styled(mobileviewbtn)`
    margin-top : 8px;
`
const MSection = styled(ListSession)`
`
const MDetailSection = styled.div`
    display : ${props => (props.status =='discription') ? 'block': 'none'};
    width : 375px;

    @media all and (max-width: 375px) {
        padding: 0 16px;
    }
`
const MChatSection = styled.div`
    width : 375px;
    display : ${props => (props.status =='chat') ? 'block': 'none'};
    
    @media all and (max-width: 375px) {
        padding: 0 16px;
    }
`
const MVideoText = styled.div`
    margin-bottom : 24px;
    font-size: 12px;
    color: ${color.black};
    word-break : keep-all;
`
const MDownlodebtn = styled(Downloadbtn)`
    width : ${props => (props.status === 'kr') ? '146px' : '220px'};
    height : 36px;
    margin-bottom : 40px;
`

const MChat = styled.iframe`
    width: 100%;
    height: 600px;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    word-break: keep-all;
`
const MChatLine = styled.div`
    width : 100%;
    height : 2px;
    background : black;
`

const MChatArea = styled.div`
    width : 100%;
    height : 54px;
    padding : 16px;
`
const MChatText = styled.div`
   font-size: 16px;
   font-weight: 500;
   color: ${color.black};
`


export default withRouter(Pl_Detail)