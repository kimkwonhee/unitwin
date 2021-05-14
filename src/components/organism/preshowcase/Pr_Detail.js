import React, { useEffect } from 'react'
import styled from 'styled-components'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import PlanSesionbtn from '../../atom/PlanSesionbtn'
import { withRouter } from 'react-router-dom'
import img_1 from '../../../images/session_10.png'
import color from '../../../style/color'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'
const Pr_Detail = ({match}) => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))
    
    const p_detaildata = curlang.p_data.pr_showcase_detail;
    // const m_detaildata = curlang.m_data.pr_showcase_detail;

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
        // console.log(window.location.pathname + window.location.search)
    }, [])

    let pathname = match.params.pr_detail

    let P_topsection = null
    let P_sectionlist = null
    let P_discription = null
    let P_localname = null
    let P_siteaddress = null


    if(pathname === 1) {
        // session 1
        P_topsection = <PTop title={p_detaildata.session1.title}/>;
        P_sectionlist = p_detaildata.session1.list;
        P_discription = p_detaildata.session1.discription;
        P_localname = p_detaildata.session1.local;
        P_siteaddress = p_detaildata.session1.site;
    }
    if(pathname === 2) {
        // session 2
        P_topsection = <PTop title={p_detaildata.session2.title}/>;
        P_sectionlist = p_detaildata.session2.list;
        P_discription = p_detaildata.session2.discription;
        P_localname = p_detaildata.session2.local;
        P_siteaddress = p_detaildata.session2.site;
    }
    if(pathname === 3) {
        // session 3
        P_topsection = <PTop title={p_detaildata.session3.title}/>;
        P_sectionlist = p_detaildata.session3.list;
        P_discription = p_detaildata.session3.discription;
        P_localname = p_detaildata.session3.local;
        P_siteaddress = p_detaildata.session3.site;
    }
    if(pathname === 4) {
        // session 4
        P_topsection = <PTop title={p_detaildata.session4.title}/>;
        P_sectionlist = p_detaildata.session4.list;
        P_discription = p_detaildata.session4.discription;
        P_localname = p_detaildata.session4.local;
        P_siteaddress = p_detaildata.session4.site;
    }
    if(pathname === 5) {
        // session 4
        P_topsection = <PTop title={p_detaildata.session5.title}/>;
        P_sectionlist = p_detaildata.session5.list;
        P_discription = p_detaildata.session5.discription;
        P_localname = p_detaildata.session5.local;
        P_siteaddress = p_detaildata.session5.site;
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    {P_topsection}
                    <PVideo height="675px"/>
                    <PContentsArea>
                        <PLogoArea>
                            <PLogoImg src={img_1} alt="logo"/>
                        </PLogoArea>
                        <PTextArea>
                            <PDiscription>{P_discription}</PDiscription>
                            <PLocal>{P_localname}</PLocal>
                            <PSite>{P_siteaddress}</PSite>
                        </PTextArea>
                    </PContentsArea>
                    <PListArea>
                        <PSection>
                            {P_sectionlist.map((list,index) => {
                                return <PlanSesionbtn 
                                            key={list.id}
                                            src={list.img} 
                                            name={list.name}
                                            discription={list.discription}
                                            link={list.link}/>
                            })}
                        </PSection>
                    </PListArea>
                </PInner>
            </PWrapper>
        </>
    )
}

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
const PVideo = styled(ListVideoSession)`
`
const PContentsArea = styled.div`
    padding: 60px 20px;
    margin-bottom : 40px;
    border-bottom : 1px solid ${color.turtle_green};
    display : flex;
`
const PLogoArea = styled.div`
    margin-right : 46px;
`
const PLogoImg = styled.img`
    width : 200px;
    height : 200px;
`
const PTextArea = styled.div`
    padding : 31px 0 31px 0;
`
const PDiscription = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${color.black};
`
const PLocal = styled.div`
    margin : 20px 0 8px 0;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PSite = styled.a`
    cursor: pointer;
`
const PListArea = styled.div`
    padding : 0px 25px;
`
const PSection = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
`

export default withRouter(Pr_Detail)