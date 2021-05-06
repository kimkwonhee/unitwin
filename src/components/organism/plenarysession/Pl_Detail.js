import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ListSession from '../../molecules/ListSession'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import mobileviewbtn from '../../atom/mobileviewbtn'
import Downloadbtn from '../../atom/Downloadbtn'
import { useSelector } from 'react-redux'
import color from '../../../style/color'

const Pl_Detail = ({match}) => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const p_detaildata = curlang.p_data.pl_session_detail;
    const m_detaildata = curlang.m_data.pl_session_detail;

    let pathname = match.params.detail
    
    // PC
    let P_topsection = null
    let P_videosection = null
    let P_contentsection = null
    let P_videotext = null
    let P_download = null
    let P_chatlink = null

    // mobile
    let M_topsection = null
    let M_videosection = null
    let M_contentsection = null
    let M_videotext = null
    let M_download = null
    let M_chatlink = null

    if (pathname == '1') {
        P_topsection = <PTop title={p_detaildata.wagner_part.title} time={p_detaildata.wagner_part.time} />
        M_topsection = <MTop title={m_detaildata.wagner_part.title} time={m_detaildata.wagner_part.time} />
        
        P_videosection = <PVideo discription={p_detaildata.wagner_part.video_text} down={p_detaildata.wagner_part.download} />
        M_videosection = <MVideo discription={m_detaildata.wagner_part.video_text} down={m_detaildata.wagner_part.download} />
        
        P_contentsection = <PSection data={p_detaildata.wagner_part.list} />
        M_contentsection = <MSection data={m_detaildata.wagner_part.list} />
        
        P_videotext = p_detaildata.wagner_part.video_text
        M_videotext = m_detaildata.wagner_part.video_text
        
        P_download = p_detaildata.wagner_part.download
        M_download = m_detaildata.wagner_part.download

        P_chatlink = p_detaildata.wagner_part.chatlink
        M_chatlink = m_detaildata.wagner_part.chatlink
        
    }
    else if (pathname == '2') {
        P_topsection = <PTop title={p_detaildata.jorissen_part.title} time={p_detaildata.jorissen_part.time} />
        M_topsection = <MTop title={m_detaildata.jorissen_part.title} time={m_detaildata.jorissen_part.time} />
        
        P_videosection = <PVideo discription={p_detaildata.jorissen_part.video_text} down={p_detaildata.jorissen_part.download} />
        M_videosection = <MVideo discription={m_detaildata.jorissen_part.video_text} down={m_detaildata.jorissen_part.download} />
        
        P_contentsection = <PSection data={p_detaildata.jorissen_part.list} />
        M_contentsection =<MSection data={m_detaildata.jorissen_part.list} />
        
        P_videotext = p_detaildata.jorissen_part.video_text
        M_videotext = m_detaildata.jorissen_part.video_text
        
        P_download = p_detaildata.jorissen_part.download
        M_download = m_detaildata.jorissen_part.download

        P_chatlink = p_detaildata.jorissen_part.chatlink
        M_chatlink = m_detaildata.jorissen_part.chatlink
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
                    <MDownlodebtn down={M_download}>{curlang.m_data.classdownload}</MDownlodebtn>
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
    color: var(--black);
`


//mobile
const MWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : auto;
    padding-bottom : 100px;

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
    height : 750px;
    display : ${props => (props.status =='chat') ? 'block': 'none'};
    
    @media all and (max-width: 375px) {
        padding: 0 16px;
    }
`
const MVideoText = styled.div`
    margin-bottom : 24px;
    font-size: 12px;
    color: var(--black);
`
const MDownlodebtn = styled(Downloadbtn)`
    width : 146px;
    height : 36px;
    margin-bottom : 40px;
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
   color: var(--black);
`


export default withRouter(Pl_Detail)