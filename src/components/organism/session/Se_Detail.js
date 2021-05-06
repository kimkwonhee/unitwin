import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import ListSession_Se from '../../molecules/ListSession_Se'
import mobileviewbtn from '../../atom/mobileviewbtn'
import { useSelector } from 'react-redux'
import color from '../../../style/color'

const Se_Detail = ({match}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const p_detaildata = curlang.p_data.session_detail;
    const m_detaildata = curlang.m_data.session_detail;

    let pathname = match.params.se_detail

    let P_topsection = null
    let M_topsection = null
    
    let P_videosection = null
    let M_videosection = null
    
    let P_contentsection = null
    let M_contentsection = null

    let P_videotext = null
    let M_videotext = null

    let P_chatlink = null
    let M_chatlink = null

    
    if(pathname == '1') {
        P_topsection = <PTop title={p_detaildata.a.title} subject={p_detaildata.a.subject} time={p_detaildata.a.time} />
        M_topsection = <MTop title={m_detaildata.a.title} subject={m_detaildata.a.subject} time={m_detaildata.a.time} />
        
        P_videosection = <PVideo discription={p_detaildata.a.video_text} down={p_detaildata.a.download} />
        M_videosection = <MVideo discription={m_detaildata.a.video_text} down={m_detaildata.a.download} />
        
        P_contentsection = <PSection data={p_detaildata.a.list} />
        M_contentsection = <PSection data={m_detaildata.a.list} />

        P_videotext = p_detaildata.a.video_text
        M_videotext = m_detaildata.a.video_text

        P_chatlink = p_detaildata.a.chatlink
        M_chatlink = m_detaildata.a.chatlink
    }
    else if (pathname == '2') {
        P_topsection = <PTop title={p_detaildata.b.title} subject={p_detaildata.b.subject} time={p_detaildata.b.time} />
        M_topsection = <MTop title={m_detaildata.b.title} subject={m_detaildata.b.subject} time={m_detaildata.b.time} />
        
        P_videosection = <PVideo discription={p_detaildata.b.video_text} down={p_detaildata.b.download} />
        M_videosection = <MVideo discription={m_detaildata.b.video_text} down={m_detaildata.b.download} />
        
        P_contentsection = <PSection data={p_detaildata.b.list} />
        M_contentsection = <PSection data={m_detaildata.b.list} />

        P_videotext = p_detaildata.b.video_text
        M_videotext = m_detaildata.b.video_text

        P_chatlink = p_detaildata.b.chatlink
        M_chatlink = m_detaildata.b.chatlink
    }
    else if (pathname == '3') {
        P_topsection = <PTop title={p_detaildata.c.title} subject={p_detaildata.c.subject} time={p_detaildata.c.time} />
        M_topsection = <MTop title={m_detaildata.c.title} subject={m_detaildata.c.subject} time={m_detaildata.c.time} />
        
        P_videosection = <PVideo discription={p_detaildata.c.video_text} down={p_detaildata.c.download} />
        M_videosection = <MVideo discription={m_detaildata.c.video_text} down={m_detaildata.c.download} />
        
        P_contentsection = <PSection data={p_detaildata.c.list} />
        M_contentsection = <PSection data={m_detaildata.c.list} />

        P_videotext = p_detaildata.c.video_text
        M_videotext = m_detaildata.c.video_text

        P_chatlink = p_detaildata.c.chatlink
        M_chatlink = m_detaildata.c.chatlink
    }
    else if (pathname == '4') {
        P_topsection = <PTop title={p_detaildata.d.title} subject={p_detaildata.d.subject} time={p_detaildata.d.time} />
        M_topsection = <MTop title={m_detaildata.d.title} subject={m_detaildata.d.subject} time={m_detaildata.d.time} />
        
        P_videosection = <PVideo discription={p_detaildata.d.video_text} down={p_detaildata.d.download} />
        M_videosection = <MVideo discription={m_detaildata.d.video_text} down={m_detaildata.d.download} />
        
        P_contentsection = <PSection data={p_detaildata.d.list} />
        M_contentsection = <PSection data={m_detaildata.d.list} />

        P_videotext = p_detaildata.d.video_text
        M_videotext = m_detaildata.d.video_text

        P_chatlink = p_detaildata.d.chatlink
        M_chatlink = m_detaildata.d.chatlink
    }
    else if (pathname == '5') {
        P_topsection = <PTop title={p_detaildata.e.title} subject={p_detaildata.e.subject} time={p_detaildata.e.time} />
        M_topsection = <MTop title={m_detaildata.e.title} subject={m_detaildata.e.subject} time={m_detaildata.e.time} />
        
        P_videosection = <PVideo discription={p_detaildata.e.video_text} down={p_detaildata.e.download} />
        M_videosection = <MVideo discription={m_detaildata.e.video_text} down={m_detaildata.e.download} />
        
        P_contentsection = <PSection data={p_detaildata.e.list} />
        M_contentsection = <PSection data={m_detaildata.e.list} />

        P_videotext = p_detaildata.e.video_text
        M_videotext = m_detaildata.e.video_text

        P_chatlink = p_detaildata.e.chatlink
        M_chatlink = m_detaildata.e.chatlink
    }
    else if (pathname == '6') {
        P_topsection = <PTop title={p_detaildata.f.title} subject={p_detaildata.f.subject} time={p_detaildata.f.time} />
        M_topsection = <MTop title={m_detaildata.f.title} subject={m_detaildata.f.subject} time={m_detaildata.f.time} />
        
        P_videosection = <PVideo discription={p_detaildata.f.video_text} down={p_detaildata.f.download} />
        M_videosection = <MVideo discription={m_detaildata.f.video_text} down={m_detaildata.f.download} />
        
        P_contentsection = <PSection data={p_detaildata.f.list} />
        M_contentsection = <PSection data={m_detaildata.f.list} />

        P_videotext = p_detaildata.f.video_text
        M_videotext = m_detaildata.f.video_text

        P_chatlink = p_detaildata.f.chatlink
        M_chatlink = m_detaildata.f.chatlink
    }
    else if (pathname == '7') {
        P_topsection = <PTop title={p_detaildata.g.title} subject={p_detaildata.g.subject} time={p_detaildata.g.time} />
        M_topsection = <MTop title={m_detaildata.g.title} subject={m_detaildata.g.subject} time={m_detaildata.g.time} />
        
        P_videosection = <PVideo discription={p_detaildata.g.video_text} down={p_detaildata.g.download} />
        M_videosection = <MVideo discription={m_detaildata.g.video_text} down={m_detaildata.g.download} />
        
        P_contentsection = <PSection data={p_detaildata.g.list} />
        M_contentsection = <PSection data={m_detaildata.g.list} />

        P_videotext = p_detaildata.g.video_text
        M_videotext = m_detaildata.g.video_text

        P_chatlink = p_detaildata.g.chatlink
        M_chatlink = m_detaildata.g.chatlink
    }
    else if (pathname == '8') {
        P_topsection = <PTop title={p_detaildata.h.title} subject={p_detaildata.h.subject} time={p_detaildata.h.time} />
        M_topsection = <MTop title={m_detaildata.h.title} subject={m_detaildata.h.subject} time={m_detaildata.h.time} />
        
        P_videosection = <PVideo discription={p_detaildata.h.video_text} down={p_detaildata.h.download} />
        M_videosection = <MVideo discription={m_detaildata.h.video_text} down={m_detaildata.h.download} />
        
        P_contentsection = <PSection data={p_detaildata.h.list} />
        M_contentsection = <PSection data={m_detaildata.h.list} />

        P_videotext = p_detaildata.h.video_text
        M_videotext = m_detaildata.h.video_text

        P_chatlink = p_detaildata.h.chatlink
        M_chatlink = m_detaildata.h.chatlink
    }

    const [status, setStatus]  = useState('discription');

    return (
        <>
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
                        <PRightArea>
                            <PChatLine />
                            <PChatArea>
                                <PChatText>{curlang.p_data.realchating}</PChatText>
                            </PChatArea>
                            <PChat src={P_chatlink} />
                        </PRightArea>
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
                    <MChat src={M_chatlink} />
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
`

const MChatSection = styled.div`
    width : 375px;
    height : 750px;
    display : ${props => (props.status =='chat') ? 'block': 'none'};
    
    @media all and (max-width: 375px) {
        padding: 0 16px;
    }
`
const MChat = styled.iframe`
    width: 100%;
    height: 100%;
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