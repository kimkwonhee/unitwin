import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import ListSession_Se from '../../molecules/ListSession_Se'
import mobileviewbtn from '../../atom/mobileviewbtn'
import { useSelector } from 'react-redux'
import color from '../../../style/color'
import { Affix } from 'antd'
import env from '../../../modules/env'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet"

const Se_Detail = ({match, location}) => {

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
    }, [])
    
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

    const p_detaildata = curlang.p_data.session_detail;
    const m_detaildata = curlang.m_data.session_detail;

    let pathname = match.params.se_detail
    let hashtag = location.hash

    useEffect(() => {
        const handleWhell = (e) => {
            // console.log(window.scrollY);
        }
        window.addEventListener("mousewheel", handleWhell);
        return () => window.removeEventListener("mousewheel", handleWhell);       
    }, []);


    let langstatus = curlang.status
    let halmet_title = ''

    useEffect(() => {
        // if(hashtag === "#YongSung_Jung") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,862);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,889);
        //     }
        // } else if(hashtag === "#Eunsu_Lee") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,1191);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,1255);
        //     }
        // } else if(hashtag === "#Sowon_Kim") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,1529);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,1715);
        //     }
        // } else if(hashtag === "#Su_youn_Kim") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,1859);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,2075);
        //     }
        // } else if(hashtag === "#Boram_Lee") {
        //     // if(langstatus==='kr') {
        //     //     window.scrollTo(0,2155);
        //     // } else if (langstatus==='en') {
        //     //     window.scrollTo(0,2400);
        //     // }
        // } else if(hashtag === "#Kiwon_Hong") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,2283);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,2523);
        //     }
        // } else if(hashtag === "#Tiina_Kukkonen") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,863);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,857);
        //     }
        // } else if(hashtag === "#Sanja_Krsmanović_Tasić") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,1297);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,1385);
        //     }
        // } else if(hashtag === "#MC_Bettman") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,1789);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,1925);
        //     }
        // } else if(hashtag === "#Chaeyeon_Kim") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,2290);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,2445);
        //     }
        // } else if(hashtag === "#Gloria_P_Zapata") {
        //     // if(langstatus==='kr') {
        //     //     window.scrollTo(0,2491);
        //     // } else if (langstatus==='en') {
        //     //     window.scrollTo(0,2732);
        //     // }
        // } else if(hashtag === "#Tei_Kim") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,865);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,895);
        //     }
        // } else if(hashtag === "#Charlene_Rajendran") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,1193);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,1319);
        //     }
        // } else if(hashtag === "#Nan_Zhang") {
        //     if(langstatus==='kr') {
        //         window.scrollTo(0,1193);
        //     } else if (langstatus==='en') {
        //         window.scrollTo(0,1319);
        //     }
        // } else {
        //     window.scrollTo(0,0);
        // }
    },[]);


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
    let M_chatlink = null

    let chatDef = {
        scroll: 0,
        height: 0
    }

    if(pathname == '1') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 1980, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 2250, height: 600 }
        }
        
        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/1" />
        // PC
        P_topsection = <PTop title={p_detaildata.a.title} subject={p_detaildata.a.subject} time={p_detaildata.a.time} />
        P_videosection = <PVideo 
                            discription={p_detaildata.a.video_text} 
                            youtube={p_detaildata.a.youtube}
                            />
        P_contentsection = <PSection data={p_detaildata.a.list} />
        P_chatlink = env.chatPath + p_detaildata.a.chatlink
        
        // mobile
        M_topsection = <MTop title={m_detaildata.a.title} subject={m_detaildata.a.subject} time={m_detaildata.a.time} />
        M_videosection = <MVideo 
                            discription={m_detaildata.a.video_text} 
                            youtube={m_detaildata.a.youtube}
                            />
        M_contentsection = <MSection data={m_detaildata.a.list} />
        M_videotext = m_detaildata.a.video_text
        M_chatlink = env.chatPath + m_detaildata.a.chatlink
    }
    else if (pathname == '2') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 2180, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 2450, height: 600 }
        }

        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/2" />
       // PC
       P_topsection = <PTop title={p_detaildata.b.title} subject={p_detaildata.b.subject} time={p_detaildata.b.time} />
       P_videosection = <PVideo 
                           discription={p_detaildata.b.video_text} 
                           youtube={p_detaildata.b.youtube}
                           />
       P_contentsection = <PSection data={p_detaildata.b.list} />
       P_chatlink = env.chatPath + p_detaildata.b.chatlink
       
       // mobile
       M_topsection = <MTop title={m_detaildata.b.title} subject={m_detaildata.b.subject} time={m_detaildata.b.time} />
       M_videosection = <MVideo 
                           discription={m_detaildata.b.video_text} 
                           youtube={m_detaildata.b.youtube}
                           />
       M_contentsection = <MSection data={m_detaildata.b.list} />
       M_videotext = m_detaildata.b.video_text
       M_chatlink = env.chatPath + m_detaildata.b.chatlink
    }
    else if (pathname == '3') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 2080, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 2550, height: 600 }
        }

        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/3" />
        // PC
        P_topsection = <PTop title={p_detaildata.c.title} subject={p_detaildata.c.subject} time={p_detaildata.c.time} />
        P_videosection = <PVideo 
                            discription={p_detaildata.c.video_text} 
                            youtube={p_detaildata.c.youtube}
                            />
        P_contentsection = <PSection data={p_detaildata.c.list} />
        P_chatlink = env.chatPath + p_detaildata.c.chatlink
        
        // mobile
        M_topsection = <MTop title={m_detaildata.c.title} subject={m_detaildata.c.subject} time={m_detaildata.c.time} />
        M_videosection = <MVideo 
                            discription={m_detaildata.c.video_text} 
                            youtube={m_detaildata.c.youtube}
                            />
        M_contentsection = <MSection data={m_detaildata.c.list} />
        M_videotext = m_detaildata.c.video_text
        M_chatlink = env.chatPath + m_detaildata.c.chatlink
    }
    else if (pathname == '4') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 2480, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 2750, height: 600 }
        }
        
        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/4" />
        // PC
        P_topsection = <PTop title={p_detaildata.d.title} subject={p_detaildata.d.subject} time={p_detaildata.d.time} />
        P_videosection = <PVideo 
                            discription={p_detaildata.d.video_text} 
                            youtube={p_detaildata.d.youtube}
                            />
        P_contentsection = <PSection data={p_detaildata.d.list} />
        P_chatlink = env.chatPath + p_detaildata.d.chatlink
        
        // mobile
        M_topsection = <MTop title={m_detaildata.d.title} subject={m_detaildata.d.subject} time={m_detaildata.d.time} />
        M_videosection = <MVideo 
                            discription={m_detaildata.d.video_text} 
                            youtube={m_detaildata.d.youtube}
                            />
        M_contentsection = <MSection data={m_detaildata.d.list} />
        M_videotext = m_detaildata.d.video_text
        M_chatlink = env.chatPath + m_detaildata.d.chatlink
    }
    else if (pathname == '5') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 2280, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 2650, height: 600 }
        }
        
        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/5" />
        // PC
        P_topsection = <PTop title={p_detaildata.e.title} subject={p_detaildata.e.subject} time={p_detaildata.e.time} />
        P_videosection = <PVideo 
                            discription={p_detaildata.e.video_text} 
                            youtube={p_detaildata.e.youtube}
                            />
        P_contentsection = <PSection data={p_detaildata.e.list} />
        P_chatlink = env.chatPath + p_detaildata.e.chatlink
        
        // mobile
        M_topsection = <MTop title={m_detaildata.e.title} subject={m_detaildata.e.subject} time={m_detaildata.e.time} />
        M_videosection = <MVideo 
                            discription={m_detaildata.e.video_text} 
                            youtube={m_detaildata.e.youtube}
                            />
        M_contentsection = <MSection data={m_detaildata.e.list} />
        M_videotext = m_detaildata.e.video_text
        M_chatlink = env.chatPath + m_detaildata.e.chatlink
    }
    else if (pathname == '6') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 2530, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 2900, height: 600 }
        }

        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/6" />
        // PC
        P_topsection = <PTop title={p_detaildata.f.title} subject={p_detaildata.f.subject} time={p_detaildata.f.time} />
        P_videosection = <PVideo 
                            discription={p_detaildata.f.video_text} 
                            youtube={p_detaildata.f.youtube}
                            />
        P_contentsection = <PSection data={p_detaildata.f.list} />
        P_chatlink = env.chatPath + p_detaildata.f.chatlink
        
        // mobile
        M_topsection = <MTop title={m_detaildata.f.title} subject={m_detaildata.f.subject} time={m_detaildata.f.time} />
        M_videosection = <MVideo 
                            discription={m_detaildata.f.video_text} 
                            youtube={m_detaildata.f.youtube}
                            />
        M_contentsection = <MSection data={m_detaildata.f.list} />
        M_videotext = m_detaildata.f.video_text
        M_chatlink = env.chatPath + m_detaildata.f.chatlink
    }
    else if (pathname == '7') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 2530, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 3000, height: 600 }
        }
        
        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/7" />
        // PC
        P_topsection = <PTop title={p_detaildata.g.title} subject={p_detaildata.g.subject} time={p_detaildata.g.time} />
        P_videosection = <PVideo 
                            discription={p_detaildata.g.video_text} 
                            youtube={p_detaildata.g.youtube}
                            />
        P_contentsection = <PSection data={p_detaildata.g.list} />
        P_chatlink = env.chatPath + p_detaildata.g.chatlink
        
        // mobile
        M_topsection = <MTop title={m_detaildata.g.title} subject={m_detaildata.g.subject} time={m_detaildata.g.time} />
        M_videosection = <MVideo 
                            discription={m_detaildata.g.video_text} 
                            youtube={m_detaildata.g.youtube}
                            />
        M_contentsection = <MSection data={m_detaildata.g.list} />
        M_videotext = m_detaildata.g.video_text
        M_chatlink = env.chatPath + m_detaildata.g.chatlink
    }
    else if (pathname == '8') {
        if(langstatus === 'kr') {
            chatDef = { scroll: 2030, height: 600 }
        } else if (langstatus === 'en') {
            chatDef = { scroll: 2400, height: 600 }
        }
        
        halmet_title = <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/session/8" />
        // PC
        P_topsection = <PTop title={p_detaildata.h.title} subject={p_detaildata.h.subject} time={p_detaildata.h.time} />
        P_videosection = <PVideo 
                            discription={p_detaildata.h.video_text} 
                            youtube={p_detaildata.h.youtube}
                            />
        P_contentsection = <PSection data={p_detaildata.h.list} />
        P_chatlink = env.chatPath + p_detaildata.h.chatlink
        
        // mobile
        M_topsection = <MTop title={m_detaildata.h.title} subject={m_detaildata.h.subject} time={m_detaildata.h.time} />
        M_videosection = <MVideo 
                            discription={m_detaildata.h.video_text} 
                            youtube={m_detaildata.h.youtube}
                            />
        M_contentsection = <MSection data={m_detaildata.h.list} />
        M_videotext = m_detaildata.h.video_text
        M_chatlink = env.chatPath + m_detaildata.h.chatlink
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
const PChat = styled.iframe`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    word-break: keep-all;
`

const PVideo = styled(ListVideoSession)`
`
const PContentsArea = styled.div`
`
const PSection = styled(ListSession_Se)`
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
    padding : 0 16px;
    margin-bottom : 40px;
`
const MSection = styled(ListSession_Se)`
`
const MVideoArea = styled.div`
    position : relative;
    width : 375px;
`
const MTop = styled(ListSessionTop)`
`
const MVideo = styled(ListVideoSession)`
`
const MViewchangeArea = styled.div`
    display : flex;
    width : 375px;
    height : 48px;
    margin-bottom : 28px;
`
const MViewbtn = styled(mobileviewbtn)`
    margin-top : 8px;
`
const MDetailSection = styled.div`
    display : ${props => (props.status =='discription') ? 'block': 'none'};
    width : 375px;
    padding : 0 16px;
`
const MVideoText = styled.div`
    margin-bottom : 40px;
    font-size: 12px;
    color: var(--black);
    word-break : keep-all;
`

const MChatSection = styled.div`
    width : 375px;
    display : ${props => (props.status =='chat') ? 'block': 'none'};
    
    @media all and (max-width: 375px) {
        padding: 0 16px;
    }
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

export default withRouter(Se_Detail)