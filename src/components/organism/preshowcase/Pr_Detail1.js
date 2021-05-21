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
import { Helmet } from "react-helmet"


const Pr_Detail1 = ({match, location}) => {
    
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

    return (
        <>
            <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/pre-session/1" />
            {/* pc */}
            <PWrapper>
                <PInner>
                    <PTop title={p_detaildata.session1.title}/>
                    <PVideo youtube={p_detaildata.session1.youtube} height="675px"/>
                    <PContentsArea>
                        <PLogoArea>
                            <PLogoImg src={p_detaildata.session1.img} alt="logo"/>
                        </PLogoArea>
                        <PTextArea>
                            <PTextTop>
                                <PPhotobtnArea href={p_detaildata.session1.photo} target="_blank">
                                    <PPototext>{curlang.p_data.phototext}</PPototext>
                                    <PPotoimg src={photoimg} alt="아이콘"/>
                                </PPhotobtnArea>
                            </PTextTop>
                            <PDiscription>{p_detaildata.session1.discription}</PDiscription>
                        </PTextArea>
                    </PContentsArea>
                    <PListArea>
                        <PItemTitle>{curlang.p_data.pr_showcase.title}</PItemTitle>
                        <PSection>
                            {p_detaildata.session1.list.map(list => {
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
                    <MTop title={m_detaildata.session1.title}/>
                </MTopArea>
                <MVideoArea>
                    <MVideo youtube={m_detaildata.session1.youtube}/>
                </MVideoArea>
                <MTextArea>
                    <MLogoImg src={m_detaildata.session1.img} alt="logo" />
                    <MPhotobtnArea href={m_detaildata.session1.photo} target="_blank">
                        <MPototext>{curlang.p_data.phototext}</MPototext>
                        <MPotoimg src={photoimg} alt="아이콘"/>
                    </MPhotobtnArea>
                    <MDiscription>{m_detaildata.session1.discription}</MDiscription>
                </MTextArea>
                <MItemSection>
                    <MItemSubject>{curlang.p_data.pr_showcase.title}</MItemSubject>
                    {m_detaildata.session1.list.map(list => {
                        return <MItemInner>
                                    <MItemLogoArea>
                                        <MLogo src={list.img} alt={list.alt}/>
                                    </MItemLogoArea>
                                    <MItemTextArea>
                                        <MItemTitle>{list.name}</MItemTitle>
                                        <MLink to={list.link}>
                                            <MMoreArea>
                                                <MMorebtn>More &#62;</MMorebtn>
                                            </MMoreArea>
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
const MMoreArea = styled.div`
    /* margin-top : 28px; */
    width :62px;
    height : 26px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
    transition : .6s;
    &:hover {
        opacity : 0.8;
    }
`
const MMorebtn = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: ${color.white};
`

export default withRouter(Pr_Detail1)