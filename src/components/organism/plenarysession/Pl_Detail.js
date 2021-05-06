import React, { useState } from 'react'
import styled from 'styled-components'
import ListSession from '../../molecules/ListSession'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import mobileviewbtn from '../../atom/mobileviewbtn'
import Downloadbtn from '../../atom/Downloadbtn'
import { useSelector } from 'react-redux'


const Pl_Detail = ({match}) => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))


    const p_detaildata = curlang.p_data.pl_session_detail;
    const m_detaildata = curlang.m_data.pl_session_detail;

    let pathname = match.params.detail
    
    // PC
    let P_topsection = null
    let P_videosection = null
    let P_contentsection = null
    let P_videotext = null
    let P_download = null

    // mobile
    let M_topsection = null
    let M_videosection = null
    let M_contentsection = null
    let M_videotext = null
    let M_download = null

    if (pathname == 'wagner-part') {
        P_topsection = <PTop title={p_detaildata.wagner_part.title} time={p_detaildata.wagner_part.time} />
        M_topsection = <PTop title={p_detaildata.wagner_part.title} time={p_detaildata.wagner_part.time} />
        P_videosection = <PVideo discription={p_detaildata.wagner_part.video_text} down={p_detaildata.wagner_part.download} />
        M_videosection = <PVideo discription={p_detaildata.wagner_part.video_text} down={p_detaildata.wagner_part.download} />
        P_contentsection = <PSection data={p_detaildata.wagner_part.list} />
        M_contentsection = <PSection data={p_detaildata.wagner_part.list} />
        P_videotext = p_detaildata.wagner_part.video_text
        P_download = p_detaildata.wagner_part.download
        
    }
    else if (pathname == 'jorissen-part') {
        P_topsection = <PTop title={p_detaildata.jorissen_part.title} time={p_detaildata.jorissen_part.time} />
        M_topsection = <PTop title={p_detaildata.jorissen_part.title} time={p_detaildata.jorissen_part.time} />
        P_videosection = <PVideo discription={p_detaildata.jorissen_part.video_text} down={p_detaildata.jorissen_part.download} />
        M_videosection = <PVideo discription={p_detaildata.jorissen_part.video_text} down={p_detaildata.jorissen_part.download} />
        P_contentsection = <PSection data={p_detaildata.jorissen_part.list} />
        M_contentsection =<PSection data={p_detaildata.jorissen_part.list} />
        M_videotext = p_detaildata.jorissen_part.video_text
        P_download = p_detaildata.jorissen_part.download
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
                            <div>채팅 영상 1</div>
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
                        강연설명
                    </MViewbtn>
                    <MViewbtn 
                        id="chat"
                        status={status}
                        onClick={()=> setStatus('chat')}
                    >
                        실시간 채팅
                    </MViewbtn>
                </MViewchangeArea>
                <MDetailSection status={status}>
                    <MVideoText>{P_videotext}</MVideoText>
                    <MDownlodebtn down={P_download}>강의자료 다운로드</MDownlodebtn>
                    {M_contentsection}
                </MDetailSection>
                <MChat status={status}>
                    <div>채팅 영상 1</div>
                </MChat>
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
    height : 450px;
    background-color : purple;
`
const PVideo = styled(ListVideoSession)`
`
const PContentsArea = styled.div`
    padding-top : 20px;
`
const PSection = styled(ListSession)`
    border-top : 1px solid var(--turtle-green);
    margin-top : 60px;
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
const MChat = styled.div`
    display : ${props => (props.status =='chat') ? 'block': 'none'};
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


export default withRouter(Pl_Detail)