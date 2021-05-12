import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ListSession from '..//components/molecules/ListSession'
import ListSessionTop from '..//components/molecules/ListSessionTop'
import ListVideoSession from '../components/molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import color from '../style/color'
import { Affix } from 'antd'
import mobileviewbtn from '../components/atom/mobileviewbtn'
import Downloadbtn from '../components/atom/Downloadbtn'
import env from '../modules/env'

const _Closing = () => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))
    const chatRef = useRef(null)
    const chatDef = {
        scroll: 3400,
        height: 600
    }

    useEffect(() => {
        window.scrollTo(0,0);
        const onScroll = () => {
            let scrollTop = document.documentElement.scrollTop
            if (scrollTop > chatDef.scroll) {
                var result = chatDef.height - (scrollTop - chatDef.scroll)
                chatRef.current.style.height = result + 'px'
            }
        }
        // Chat Scroll
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll' , onScroll);
    }, []);

    const p_detaildata = curlang.p_data.closing;
    const m_detaildata = curlang.m_data.closing;

    const [status, setStatus]  = useState('discription');

    return (
        <>
            {/* PC */}
            <PWrapper>
                <PInner>
                    <PTop 
                        title={p_detaildata.title} 
                        time={p_detaildata.time} 
                    /> 
                    <PCenterArea>
                        <PLeftArea>
                            <PVideo 
                                discription={p_detaildata.video_text} 
                                down={p_detaildata.download}
                                youtube={p_detaildata.youtube} 
                                downlink={p_detaildata.downlink}
                            /> 
                            <PContentsArea>
                                <PSection data={p_detaildata.list} /> 
                            </PContentsArea>
                        </PLeftArea>
                        <Affix offsetTop={100}>
                            <PRightArea>
                            <PChatLine />
                                <PChatArea>
                                    <PChatText>{curlang.p_data.realchating}</PChatText>
                                </PChatArea>
                                <PChat ref={chatRef} src={p_detaildata.chatlink} />
                            </PRightArea>
                        </Affix> 
                    </PCenterArea>
                </PInner>
            </PWrapper>


        {/* mobile */}
            <MWrapper>
                <MTopArea>
                    <MTop title={p_detaildata.title} time={p_detaildata.time} /> 
                </MTopArea>
                <MVideoArea>
                    <MVideo 
                        youtube={m_detaildata.youtube} 
                    /> 
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
                    <MVideoText>{m_detaildata.video_text}</MVideoText>
                    <MDownlodebtn 
                        down={m_detaildata.download}
                        downlink={m_detaildata.downlink}
                        >
                            {curlang.m_data.classdownload}
                        </MDownlodebtn>
                    <MSection data={p_detaildata.list} /> 
                </MDetailSection>
                <MChatSection status={status}>
                    <MChatLine />
                    <MChatArea>
                        <MChatText>{curlang.m_data.realchating}</MChatText>
                    </MChatArea>
                    <MChat src={m_detaildata.chatlink} />
                </MChatSection>
            </MWrapper>
        </>
    )
}

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

// Mobile
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
const MTop = styled(ListSessionTop)`
`
const MVideoArea = styled.div`
    position : relative;
    max-width : 375px;
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
`
const MSection = styled(ListSession)`
`
const MChat = styled.iframe`
    width: 100%;
    height: 500px;
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
const MDownlodebtn = styled(Downloadbtn)`
    width : 146px;
    height : 36px;
    margin-bottom : 40px;
`


export default withRouter(_Closing)