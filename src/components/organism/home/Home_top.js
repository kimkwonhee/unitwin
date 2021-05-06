import React, { useEffect } from 'react'
import styled from 'styled-components'
import backgroud1 from '../../../images/home_bg01.jpg'
import logo from '../../../images/home_top_logo.png'
import Preregistrationbtn from '../../atom/Preregistrationbtn'
import PageTopArea from '../../molecules/PageTopArea'
import color from '../../../style/color'
import lottie from 'lottie-web'
import animData from '../../../images/circle_main.json'

const Home_top = ({className , curlang}) => {
    
    const p_detaildata = curlang.p_data.home_top;
    const m_detaildata = curlang.m_data.home_top;

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
    }, [])
    
    return (
        <>
            {/* PC */}
            <PWrapper className={className}>
                <PInner>
                    <PLogoArea>
                        <PLogoimg src={logo} alt="mark"/>
                    </PLogoArea>
                    <PBackImgArea>
                        <PBackImg id="animArea" />
                    </PBackImgArea>
                    <PContentsArea>
                        <PImgTitle src={p_detaildata.img} alt="title" />
                        <PCalender>{p_detaildata.time}</PCalender>
                        <PApplybtn>{p_detaildata.advance}</PApplybtn>
                        <PContents 
                            title={p_detaildata.title} 
                            contents={p_detaildata.contents}
                            subcontents={p_detaildata.subcontents}
                            subfontsize="20px"
                            homebtn={true}
                        />
                    </PContentsArea>
                </PInner>
            </PWrapper>
            
            {/* Mobile */}
            <MWrapper>
                <MInner>
                    <MLogoArea>
                        <MLogoimg src={logo} alt="mark"/>
                    </MLogoArea>
                    <MBackImgArea>
                        <MBackImg id="animAreaMO" />
                    </MBackImgArea>
                    <MContentsArea>
                        <MImgTitle src={m_detaildata.img} alt="title" />
                        <MCalender>{m_detaildata.time}</MCalender>
                        <MContents 
                            title={m_detaildata.title} 
                            contents={m_detaildata.contents}
                            subcontents={m_detaildata.subcontents}
                            subfontsize="20px"
                            homebtn={true}
                        />
                        <MApplybtn>{m_detaildata.advance}</MApplybtn>
                    </MContentsArea>
                </MInner>
            </MWrapper>
        </>
    )
}

// PC
const PWrapper = styled.div`
    width : auto;
    height : 1400px;
    display : flex;
    justify-content : center;
    padding-bottom : 100px;
    background : url(${backgroud1});
    background-size : cover;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    position : relative;
    width : 1200px;
`
const PLogoArea = styled.div`
    position : absolute;
    top : 130px;
    right : 0; 
    z-index : 5;
`
const PLogoimg = styled.img`
    width : 152px;
    height : 77px;
`
const PBackImgArea = styled.div`
    width: 680px;
    height: 680px;
    position : absolute;
    top : 160px;
    right : 0;
    display : flex;
    justify-content : flex-end;
`
const PBackImg = styled.div`
    width: 680px;
    height: 680px;
`
const PContentsArea = styled.div`
    position : absolute;
    width : 100%;
    top : 207px;
    z-index : 2;
`
const PImgTitle = styled.img`
`
const PCalender = styled.div`
    padding : 40px 0 50px 0;
    font-size: 20px;
    font-weight: bold;
    color: ${color.black};
`
const PApplybtn = styled(Preregistrationbtn)`
`
const PContents = styled(PageTopArea)`
    margin-top : 180px;
    margin-bottom : 72px;
`

// Mobile
const MWrapper = styled.div`
    width : auto;
    height : 800px;
    padding : 0 16px 50px 16px; 
    display : flex;
    justify-content : center;
    background : url(${backgroud1});
    background-size : cover;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 375px;
`
const MLogoArea = styled.div`
    position : absolute;
    top : 68px;
    right : 0; 
    z-index : 5;
`
const MLogoimg = styled.img`
    width : 116px;
    height : 56px;
`
const MBackImgArea = styled.div`
    position : absolute;
    top : 68px;
    right : 0;
    display : flex;
    justify-content : flex-end;
`
const MBackImg = styled.div`
    width: 280px;
    height: 280px;
`
const MContentsArea = styled.div`
    position : absolute;
    top : 146px;
    width : 100%;
    z-index : 2;
`
const MImgTitle = styled.img`
    width : 277px;
`
const MCalender = styled.div`
    padding : 20px 0 30px 0;
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
`
const MApplybtn = styled(Preregistrationbtn)`
    margin-top : 24px;
    width : 100%;
    height : 48px;
    font-size: 14px;
`
const MContents = styled(PageTopArea)`
`
export default Home_top