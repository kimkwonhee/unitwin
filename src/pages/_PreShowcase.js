import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import PageTopArea from '../components/molecules/PageTopArea'
import { Link } from 'react-router-dom';
import color from '../style/color'
import lottie from 'lottie-web'
import animData from '../images/circle_showcase.json'
import { useSelector } from 'react-redux'
import SessionBg from '../images/session_bg_pc.png';
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet"
import m_logo_title from '../images/m_prelogo_title.png';

const _PreShowcase = () => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    useEffect(() => {
        const lottiePlayer = async () => {   
            await lottie.loadAnimation({
                container: document.querySelector('#animArea'),
                loop: true,
                autoplay: true,
                animationData: animData
            })

            await lottie.loadAnimation({
                container: document.querySelector('#animAreaMO'),
                loop: true,
                autoplay: true,
                animationData: animData
            })
        }
        lottiePlayer()
        const gaSetting = async () => {
            await ReactGA.initialize('G-8BW0WPEKCF')
            await ReactGA.set({
                page: window.location.pathname + window.location.search
            })
            await ReactGA.pageview(window.location.pathname + window.location.search)
        }
        gaSetting()
    }, [])

    const p_detaildata = curlang.p_data.pr_showcase;
    const m_detaildata = curlang.m_data.pr_showcase;

    const [detailData, setDetailData] = useState(p_detaildata.session1);
    
    useEffect(() => {
        setDetailData(p_detaildata.session1);   
    }, [curlang]);
    
    return (
        <>
            <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM/pre-session" />
            {/* pc */}
            <PWrapper>
                <PBg bg={SessionBg}></PBg>
                <PInner>
                    <PContents 
                            title={p_detaildata.title} 
                            contents={p_detaildata.contents}
                        />
                    <PSectionArea>
                        <PLogoArea1
                            onClick={(e)=>setDetailData(p_detaildata.session1)} >
                            <PLogo1 
                                src={p_detaildata.session1.img} 
                                alt={p_detaildata.session1.alt}
                            />
                        </PLogoArea1>
                        <PLogoArea2
                            onClick={(e)=>setDetailData(p_detaildata.session2)} >
                            <PLogo2 
                                src={p_detaildata.session2.img} 
                                alt={p_detaildata.session2.alt}
                            />
                        </PLogoArea2>
                        <PLogoArea3
                            onClick={(e)=>setDetailData(p_detaildata.session3)} >
                            <PLogo3 
                                src={p_detaildata.session3.img} 
                                alt={p_detaildata.session3.alt}
                            />
                        </PLogoArea3>
                        <PLogoArea4
                            onClick={(e)=>setDetailData(p_detaildata.session4)}>
                            <PLogo4 
                                src={p_detaildata.session4.img} 
                                alt={p_detaildata.session4.alt}
                            />
                        </PLogoArea4>
                        <PLogoArea>
                            <PBackImg id="animArea" />
                        </PLogoArea>
                        <PDetailArea>
                            <PTextSection>
                                <PTextLogoArea>
                                    <PLogoImg src={detailData.img} alt={detailData.alt} />
                                </PTextLogoArea>
                                <PDetailData>{detailData.contents}</PDetailData>
                                <PLink to={detailData.link}>
                                    <PMoreArea>                                
                                        <PMorebtn>More &#62;</PMorebtn>
                                    </PMoreArea>
                                </PLink>
                            </PTextSection>
                        </PDetailArea>
                    </PSectionArea>
                </PInner>
            </PWrapper>
            

            {/* mobile */}
            <MWrapper>
                <MInner>
                    <MContents 
                            title={m_detaildata.title} 
                            contents={m_detaildata.contents}
                    />
                    <MLogoArea>
                        <MBackImg id="animAreaMO" />
                        <MLogotitle src={m_logo_title} alt="logo title"/>
                    </MLogoArea>
                    <MSection>
                        <MItemInner>
                            <MItemLogoArea>
                                <MLogo src={m_detaildata.session1.img} alt={m_detaildata.session1.alt}/>
                            </MItemLogoArea>
                            <MTextArea>
                                <MItemTitle>{m_detaildata.session1.company}</MItemTitle>
                                <MItemContents>{m_detaildata.session1.contents}</MItemContents>
                                <MLink to={m_detaildata.session1.link}>
                                    <MMoreArea>
                                        <MMorebtn>More &#62;</MMorebtn>
                                    </MMoreArea>
                                </MLink>
                            </MTextArea>
                        </MItemInner>
                        <MItemInner>
                            <MItemLogoArea>
                                <MLogo src={m_detaildata.session2.img} alt={m_detaildata.session2.alt}/>
                            </MItemLogoArea>
                            <MTextArea>
                                <MItemTitle>{m_detaildata.session2.company}</MItemTitle>
                                <MItemContents>{m_detaildata.session2.contents}</MItemContents>
                                <MLink to={m_detaildata.session2.link}>
                                    <MMoreArea>
                                        <MMorebtn>More &#62;</MMorebtn>
                                    </MMoreArea>
                                </MLink>
                            </MTextArea>
                        </MItemInner>
                        <MItemInner>
                            <MItemLogoArea>
                                <MLogo src={m_detaildata.session3.img} alt={m_detaildata.session3.alt}/>
                            </MItemLogoArea>
                            <MTextArea>
                                <MItemTitle>{m_detaildata.session3.company}</MItemTitle>
                                <MItemContents>{m_detaildata.session3.contents}</MItemContents>
                                <MLink to={m_detaildata.session3.link}>
                                    <MMoreArea>
                                        <MMorebtn>More &#62;</MMorebtn>
                                    </MMoreArea>
                                </MLink>
                            </MTextArea>
                        </MItemInner>
                        <MItemInner>
                            <MItemLogoArea>
                                <MLogo src={m_detaildata.session4.img} alt={m_detaildata.session4.alt}/>
                            </MItemLogoArea>
                            <MTextArea>
                                <MItemTitle>{m_detaildata.session4.company}</MItemTitle>
                                <MItemContents>{m_detaildata.session4.contents}</MItemContents>
                                <MLink to={m_detaildata.session4.link}>
                                    <MMoreArea>
                                        <MMorebtn>More &#62;</MMorebtn>
                                    </MMoreArea>
                                </MLink>
                            </MTextArea>
                        </MItemInner>
                    </MSection>
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
const PSectionArea = styled.div`
    margin-top : 80px;
    display : flex;
    width : 100%;
    height : 500px;
`
const PLogoArea = styled.div`
    position : relative;
    width : 600px;
    height : 100%;
`
const PLogoArea1 = styled.div`
    cursor: pointer;
    position : absolute;
    width : 240px;
    height : 240px;
    top : 390px;
    left : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
    z-index : 10;
    transition: .6s;
    border-radius: 20px;
    &:hover {
        transform:scale(1.1);
        background : rgba(0,0,0, .04);
    }
`
const PLogo1 = styled.img`
    width : 203px;
    height : 187px;
`
const PLogoArea2 = styled.div`
    cursor: pointer;
    position : absolute;
    width : 280px;
    height : 120px;
    top : 530px;
    left : 330px;
    display : flex;
    align-items : center;
    justify-content : center;
    z-index : 10;
    transition: .6s;
    border-radius: 20px;
    &:hover {
        transform:scale(1.1);
        background : rgba(0,0,0, .04);
    }
`
const PLogo2 = styled.img`
    width : 187px;
    height : 76px;
`
const PLogoArea3 = styled.div`
    cursor: pointer;
    position : absolute;
    width : 320px;
    height : 126px;
    top : 690px;
    left : 0px;
    display : flex;
    align-items : center;
    justify-content : center;
    z-index : 10;
    transition: .6s;
    border-radius: 20px;
    &:hover {
        transform:scale(1.1);
        background : rgba(0,0,0, .04);
    }
`
const PLogo3 = styled.img`
    width : 267px;
    height : 81px;
`
const PLogoArea4 = styled.div`
    cursor: pointer;
    position : absolute;
    width : 260px;
    height : 180px;
    top : 710px;
    left : 330px;
    display : flex;
    align-items : center;
    justify-content : center;
    z-index : 10;
    transition: .6s;
    border-radius: 20px;
    &:hover {
        transform:scale(1.1);
        background : rgba(0,0,0, .04);
    }
`
const PLogo4 = styled.img`
    width : 230px;
    height : 164px;
`
const PBackImg = styled.div`
    position : absolute;
    top : 0;
    width: 100%;
    height: 100%;
    opacity : 0.4;
`
const PDetailArea = styled.div`
    width : 600px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-top : 20px;
`
const PTextSection = styled.div`
    width : 420px;
    height : auto;
    display :flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
const PTextLogoArea = styled.div`
    width : 280px;
    display : flex;
    justify-content : center;
    align-items : center;
`
const PLogoImg = styled.img`
`
const PDetailData = styled.div`
    margin-top : 40px;
    margin-bottom : 30px;
    font-size: 16px;
    font-weight: 500;
    word-break : keep-all;
    white-space : pre-line;
    color: ${color.black};
    text-align : center;
`
const PMoreArea = styled.div`
    margin-top : 28px;
    width :158px;
    height : 32px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${color.turtle_green};
    transition : .6s;
    &:hover {
        opacity : 0.8;
    }
`
const PMorebtn = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${color.white};
`
const PLink = styled(Link)`
    text-decoration : none;
`


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
const MLogoArea = styled.div`
    position : relative;
    width : 100%;
    height : 323px;
    margin-top : 40px;
`
const MBackImg = styled.div`
    position : absolute;
    top : 0;
    width: 100%;
    height: 100%;
    opacity : 0.4;
`
const MLogotitle = styled.img`
    position : absolute;
    top : 0;
    width : 100%;
    height : 100%;
    z-index : 10;
`
const MSection = styled.div`
    width : 100%;
    margin-top : 40px;
    border-top : 2px solid ${color.turtle_green};
    /* background-color : red; */
`
const MItemInner = styled.div`
    margin-top : 28px;
    display : flex;
    /* background-color : red; */
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
const MTextArea = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    /* background-color : blue; */
`
const MItemTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 12px;
`
const MItemContents = styled.div`
    font-size: 12px;
    color: ${color.black};
    margin-bottom : 12px;
    white-space : pre-line;
    word-break : keep-all;
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

export default _PreShowcase