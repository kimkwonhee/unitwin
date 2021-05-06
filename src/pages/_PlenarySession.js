import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import PageTopArea from '../components/molecules/PageTopArea'
import Pl_SectionData from '../components/organism/plenarysession/Pl_SectionData'
import { useSelector } from 'react-redux'

const _PlenarySession = withRouter(() => {
    
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }));

    const p_detaildata = curlang.p_data.pl_session;
    const m_detaildata = curlang.m_data.pl_session;

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents 
                            title={p_detaildata.title} 
                            contents={p_detaildata.contents}
                        />
                    <PMiddleArea>
                        <P_Data 
                            imgs={p_detaildata.data[0].imgs}
                            title={p_detaildata.data[0].title}
                            time={p_detaildata.data[0].time}
                            name={p_detaildata.data[0].name}
                            enname={p_detaildata.data[0].enname}
                            jop={p_detaildata.data[0].jop}
                            link={p_detaildata.data[0].link}
                        />
                        <P_Data 
                             imgs={p_detaildata.data[1].imgs}
                             title={p_detaildata.data[1].title}
                             time={p_detaildata.data[1].time}
                             name={p_detaildata.data[1].name}
                             enname={p_detaildata.data[1].enname}
                             jop={p_detaildata.data[1].jop}
                             link={p_detaildata.data[1].link}
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
                    <MMiddleArea>
                        <M_Data 
                             imgs={m_detaildata.data[0].imgs}
                             title={m_detaildata.data[0].title}
                             time={m_detaildata.data[0].time}
                             name={m_detaildata.data[0].name}
                             enname={m_detaildata.data[0].enname}
                             jop={m_detaildata.data[0].jop}
                             link={m_detaildata.data[0].link}
                        />
                        <M_Data 
                             imgs={m_detaildata.data[1].imgs}
                             title={m_detaildata.data[1].title}
                             time={m_detaildata.data[1].time}
                             name={m_detaildata.data[1].name}
                             enname={m_detaildata.data[1].enname}
                             jop={m_detaildata.data[1].jop}
                             link={m_detaildata.data[1].link}
                        />
                    </MMiddleArea>
                </MInner>
            </MWrapper>
        </>
    )
})
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
const PInner = styled.div`
    position : relative;
    width : 1200px;
`
const PContents = styled(PageTopArea)`
    margin-top : 180px;
`
const PMiddleArea = styled.div`
    margin-top : 120px;
    border-top : 4px solid var(--turtle-green);
`
const P_Data = styled(Pl_SectionData)`
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
const MContents = styled(PageTopArea)`
    margin-top : 100px;
`
const MMiddleArea = styled.div`
    margin-top : 40px;
    border-top : 2px solid var(--turtle-green);
`
const M_Data = styled(Pl_SectionData)`
`

export default _PlenarySession