import React from 'react'
import styled from 'styled-components'
import ListSession from '..//components/molecules/ListSession'
import ListSessionTop from '..//components/molecules/ListSessionTop'
import ListVideoSession from '../components/molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'



const _Closing = () => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const p_detaildata = curlang.p_data.closing;
    const m_detaildata = curlang.m_data.closing;

    return (
        <>
            <PWrapper>
                <PInner>
                    <PTop title={p_detaildata.title} time={p_detaildata.time} /> 
                    <PCenterArea>
                        <PLeftArea>
                            <PVideo discription={p_detaildata.video_text} down={p_detaildata.download} /> 
                            <PContentsArea>
                                <PSection data={p_detaildata.list} /> 
                            </PContentsArea>
                        </PLeftArea>
                        <PRightArea>
                            <PChat src='http://dc2020.dellang.com:8082/chat/index.html?r=1000&l=kr' />
                        </PRightArea>
                    </PCenterArea>
                </PInner>
            </PWrapper>

            <MWrapper>
                <MInner>

                </MInner>
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
    border-top : 1px solid var(--turtle-green);
    margin-top : 60px;
`

// Mobile
const MWrapper = styled.div`
    width : auto;
    padding : 0 16px 80px 16px;
    display : flex;
    justify-content : center;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 375px;
`


export default withRouter(_Closing)