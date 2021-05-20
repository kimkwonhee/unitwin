import React, { useEffect } from 'react'
import styled from 'styled-components'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import PlanSesionbtn from '../../atom/PlanSesionbtn'
import { withRouter, Link } from 'react-router-dom'
import color from '../../../style/color'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'
import photoimg from '../../../images/photo_icon.png'


const Pr_Detail = ({match, location}) => {
    
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))
    
    const p_detaildata = curlang.p_data.pr_showcase_detail;
    const m_detaildata = curlang.m_data.pr_showcase_detail;

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
    },[curlang, location.pathname]);

    let pathname = match.params.pr_detail

    // pc
    let P_topsection = null
    let P_video_section = null
    let P_logo_img = null
    let P_sectionlist = null
    let P_discription = null
    let P_photoaddress = null

    // mobile
    let M_topsection = null
    let M_videosection = null
    let M_logo_img = null
    let M_photoaddress = null
    let M_discription = null
    let M_sectionlist = null

    if(pathname == '1') {
        // session 1
        // pc
        P_topsection = <PTop title={p_detaildata.session1.title}/>
        P_video_section = <PVideo youtube={p_detaildata.session1.youtube} height="675px"/>
        P_logo_img = <PLogoImg src={p_detaildata.session1.img} alt="logo"/>
        P_sectionlist = p_detaildata.session1.list;
        P_discription = p_detaildata.session1.discription;
        P_photoaddress = p_detaildata.session1.photo;

        // mobile
        M_topsection = <MTop title={m_detaildata.session1.title}/>
        M_videosection = <MVideo youtube={m_detaildata.session1.youtube}/>
        M_logo_img = <MLogoImg src={m_detaildata.session1.img} alt="logo" />
        M_photoaddress = m_detaildata.session1.photo;
        M_discription = m_detaildata.session1.discription;
        M_sectionlist = m_detaildata.session1.list;
    }else if(pathname == '2') {
        // session 2
        // pc
        P_topsection = <PTop title={p_detaildata.session2.title}/>
        P_video_section = <PVideo youtube={p_detaildata.session2.youtube} height="675px"/>
        P_logo_img = <PLogoImg src={p_detaildata.session2.img} alt="logo"/>
        P_sectionlist = p_detaildata.session2.list;
        P_discription = p_detaildata.session2.discription;
        P_photoaddress = p_detaildata.session2.photo;

        // mobile
        M_topsection = <MTop title={m_detaildata.session2.title}/>
        M_videosection = <MVideo youtube={m_detaildata.session2.youtube}/>
        M_logo_img = <MLogoImg src={m_detaildata.session2.img} alt="logo" />
        M_photoaddress = m_detaildata.session2.photo;
        M_discription = m_detaildata.session2.discription;
        M_sectionlist = m_detaildata.session2.list;
    } else if(pathname == '3') {
        // session 3
        // pc
        P_topsection = <PTop title={p_detaildata.session3.title}/>;
        P_video_section = <PVideo youtube={p_detaildata.session3.youtube} height="675px"/>
        P_logo_img = <PLogoImg src={p_detaildata.session3.img} alt="logo"/>
        P_sectionlist = p_detaildata.session3.list;
        P_discription = p_detaildata.session3.discription;
        P_photoaddress = p_detaildata.session3.photo;

        // mobile
        M_topsection = <MTop title={m_detaildata.session3.title}/>
        M_videosection = <MVideo youtube={m_detaildata.session3.youtube}/>
        M_logo_img = <MLogoImg src={m_detaildata.session3.img} alt="logo" />
        M_photoaddress = m_detaildata.session3.photo;
        M_discription = m_detaildata.session3.discription;
        M_sectionlist = m_detaildata.session3.list;
    } else if(pathname == '4') {
        // session 4
        // pc
        P_topsection = <PTop title={p_detaildata.session4.title}/>;
        P_video_section = <PVideo youtube={p_detaildata.session4.youtube} height="675px"/>
        P_logo_img = <PLogoImg src={p_detaildata.session4.img} alt="logo"/>
        P_sectionlist = p_detaildata.session4.list;
        P_discription = p_detaildata.session4.discription;
        P_photoaddress = p_detaildata.session4.photo;

        // mobile
        M_topsection = <MTop title={m_detaildata.session4.title}/>
        M_videosection = <MVideo youtube={m_detaildata.session4.youtube}/>
        M_logo_img = <MLogoImg src={m_detaildata.session4.img} alt="logo" />
        M_photoaddress = m_detaildata.session4.photo;
        M_discription = m_detaildata.session4.discription;
        M_sectionlist = m_detaildata.session4.list;
    }

    return (
        <>
            {/* pc */}
            <PWrapper>
                <PInner>
                    {P_topsection}
                    {P_video_section}
                    <PContentsArea>
                        <PLogoArea>
                            {P_logo_img}
                        </PLogoArea>
                        <PTextArea>
                            <PTextTop>
                                <PPhotobtnArea href={P_photoaddress} target="_blank">
                                    <PPototext>{curlang.p_data.phototext}</PPototext>
                                    <PPotoimg src={photoimg} alt="아이콘"/>
                                </PPhotobtnArea>
                            </PTextTop>
                            <PDiscription>{P_discription}</PDiscription>
                        </PTextArea>
                    </PContentsArea>
                    <PListArea>
                        <PItemTitle>{curlang.p_data.pr_showcase.title}</PItemTitle>
                        <PSection>
                            {P_sectionlist.map(list => {
                                return <PlanSesionbtn 
                                            key={list.id}
                                            src={list.img} 
                                            name={list.name}
                                            link={list.link} />
                            })}
                        </PSection>
                    </PListArea>
                </PInner>
            </PWrapper>

            {/* mobile */}
            <MWrapper>
                <MTopArea>
                    {M_topsection}
                </MTopArea>
                <MVideoArea>
                    {M_videosection}
                </MVideoArea>
                <MTextArea>
                    {M_logo_img}
                    <MPhotobtnArea href={M_photoaddress} target="_blank">
                        <MPototext>{curlang.p_data.phototext}</MPototext>
                        <MPotoimg src={photoimg} alt="아이콘"/>
                    </MPhotobtnArea>
                    <MDiscription>{M_discription}</MDiscription>
                </MTextArea>
                <MItemSection>
                    <MItemSubject>{curlang.p_data.pr_showcase.title}</MItemSubject>
                    {M_sectionlist.map(list => {
                        return <MItemInner>
                                    <MItemLogoArea>
                                        <MLogo src={list.img} alt={list.alt}/>
                                    </MItemLogoArea>
                                    <MItemTextArea>
                                        <MItemTitle>{list.name}</MItemTitle>
                                        <MLink to={list.link}>
                                            <MMorebtn>More &#62;</MMorebtn>
                                        </MLink>
                                    </MItemTextArea>
                                </MItemInner>
                    })}
                </MItemSection>
            </MWrapper>
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
    padding: 60px 20px 60px 20px;
    margin-bottom : 40px;
    border-bottom : 1px solid ${color.turtle_green};
    display : flex;
`
const PLogoArea = styled.div`
    width : 320px;
    margin-right : 46px;
    display : flex;
    align-items : center;
    justify-content : center;
`
const PTextTop = styled.div`
    display : flex;
    justify-content : flex-end;
`
const PLogoImg = styled.img`
`
const PTextArea = styled.div`
`
const PPhotobtnArea = styled.a`
    width : 168px;
    height : 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};

    transition : .6s;
    &:hover {
        opacity : 0.8;
    }
`
const PPototext = styled.div`
    margin-right : 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${color.white};
`
const PPotoimg = styled.img`
`
const PDiscription = styled.div`
    padding : 40px 0px;
    font-size: 16px;
    font-weight: 500;
    color: ${color.black};
    white-space : pre-line;
    word-break : keep-all;
`
const PListArea = styled.div`
    padding : 0px 25px;
`
const PSection = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
`
const PItemTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 10px;
`

// mobile
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
const MTop = styled(ListSessionTop)`
`
const MVideoArea = styled.div`
    position : relative;
    width : 375px;
`
const MVideo = styled(ListVideoSession)`
`
const MTextArea = styled.div`
    width : 375px;
    padding : 0 16px;
    margin-top : 28px;
    display : flex;
    flex-direction : column;
    align-items : center;
    padding-bottom : 40px; 
    /* border-bottom : 2px solid ${color.turtle_green}; */
`
const MLogoImg = styled.img`
`
const MPhotobtnArea = styled.a`
    width : 168px;
    height : 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
`
const MPototext = styled.div`
    margin-right : 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${color.white};
`
const MPotoimg = styled.img`
`
const MDiscription = styled.div`
    margin-top : 16px;
    font-size: 12px;
    text-align : center;
    word-break : keep-all;
    color: ${color.black};
`
const MItemSection = styled.div`
    width : 375px;
    padding : 0px 16px 80px 16px;
    border-top : 2px solid ${color.turtle_green};
`
const MItemSubject = styled.div`
    margin-top : 7px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const MItemInner = styled.div`
    display : flex;
    width : 100%;
    height : 140px;
    margin-top : 28px;
`
const MItemLogoArea = styled.div`
    width : 140px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 30px;
`
const MLogo = styled.img`
`
const MItemTextArea = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
`
const MItemTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 12px;
`
const MLink = styled(Link)`
    text-decoration : none;
`
const MMorebtn = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: ${color.turtle_green};
`

export default withRouter(Pr_Detail)