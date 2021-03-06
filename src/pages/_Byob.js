import React, {useEffect} from 'react'
import styled from 'styled-components'
import PageTopArea from '../components/molecules/PageTopArea'
import Pl_SectionData from '../components/organism/plenarysession/Pl_SectionData'
import { useSelector } from 'react-redux'
import color from '../style/color'
import SessionBg from '../images/session_bg_pc.png';

const _Byob = () => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const p_detaildata = curlang.p_data.byob;
    const m_detaildata = curlang.m_data.byob;

    const langstatus = curlang.staus

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <PWrapper>
                <PBg bg={SessionBg}></PBg>
                <PInner>
                    <PContents 
                            title={p_detaildata.title} 
                            contents={p_detaildata.contents}
                        />
                    <PZoomArea>
                        <PZoombtn status={langstatus} href={p_detaildata.link} target="_blank">
                            <PZoomText>{curlang.p_data.zoom}</PZoomText>
                        </PZoombtn>
                    </PZoomArea>
                    <PMiddleArea>
                        <P_Data 
                            imgs={p_detaildata.data[0].imgs}
                            name={p_detaildata.data[0].name}
                            jop={p_detaildata.data[0].jop}
                            discripton={p_detaildata.data[0].discripton}
                        />
                        <P_Data 
                            imgs={p_detaildata.data[1].imgs}
                            name={p_detaildata.data[1].name}
                            jop={p_detaildata.data[1].jop}
                            discripton={p_detaildata.data[1].discripton}
                        />
                        <P_Data 
                            imgs={p_detaildata.data[2].imgs}
                            name={p_detaildata.data[2].name}
                            jop={p_detaildata.data[2].jop}
                            discripton={p_detaildata.data[2].discripton}
                        />
                    </PMiddleArea>
                </PInner>
            </PWrapper>
            {/* Mobile */}
            
            <MWrapper>
                <MInner>
                    <MContents 
                            title={m_detaildata.title} 
                            contents={m_detaildata.contents}
                        />
                    <MZoomArea status={langstatus}>
                        <MZoombtn status={langstatus} href={p_detaildata.link} target="_blank">
                            <MZoomText>{curlang.p_data.zoom}</MZoomText>
                        </MZoombtn>
                    </MZoomArea>
                    <MMiddleArea>
                        <M_Data 
                            imgs={m_detaildata.data[0].imgs}
                            name={m_detaildata.data[0].name}
                            jop={m_detaildata.data[0].jop}
                            discripton={m_detaildata.data[0].discripton}
                        />
                        <M_Data 
                            imgs={m_detaildata.data[1].imgs}
                            name={m_detaildata.data[1].name}
                            jop={m_detaildata.data[1].jop}
                            discripton={m_detaildata.data[1].discripton}
                        />
                        <M_Data 
                            imgs={m_detaildata.data[2].imgs}
                            name={m_detaildata.data[2].name}
                            jop={m_detaildata.data[2].jop}
                            discripton={m_detaildata.data[2].discripton}
                        />
                    </MMiddleArea>
                </MInner>
            </MWrapper>
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    margin-bottom : 210px;
    display : flex;
    justify-content : center;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PBg = styled.div`
    width: 100vw;
    height: 100vh;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left bottom;
    background-image: url('${props => props.bg}');
    position: fixed;
`
const PInner = styled.div`
    position : relative;
    width : 1200px;
`
const PContents = styled(PageTopArea)`
    margin-top : 180px;
`
const PMiddleArea = styled.div`
    border-top : 4px solid ${color.turtle_green};
`
const P_Data = styled(Pl_SectionData)`
`
const PZoomArea = styled.div`
    margin-top : 104px;
    margin-bottom : 20px;
    width : 100%;
    display: flex;
    justify-content : flex-end;
`
const PZoombtn = styled.a`
    width: ${props => (props.status == 'kr')? '92px': '102px'};
    height: 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
    transition: .6s;
    &:hover {
        opacity: 0.8;
    }
`
const PZoomText = styled.div`
     font-size: 14px;
     font-weight: bold;
     color: ${color.white};
`

// Mobile
const MWrapper = styled.div`
    width : auto;
    padding : 0 16px 50px 16px;
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
const MContents = styled(PageTopArea)`
    margin-top : 100px;
`
const MZoomArea = styled.div`
    display: flex;
    width : ${props => (props.status == 'kr')? '92px': '102px'};
    margin-top : 40px;
`
const MZoombtn = styled.a`
    width: ${props => (props.status == 'kr')? '92px': '102px'};
    height: 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
`
const MZoomText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.white};
`
const MMiddleArea = styled.div`
    margin-top : 12px;
    border-top : 2px solid ${color.turtle_green};
`
const M_Data = styled(Pl_SectionData)`
`

export default _Byob