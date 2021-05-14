import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import PageTopArea from '../components/molecules/PageTopArea'
import { Link } from 'react-router-dom';
import color from '../style/color'
import lottie from 'lottie-web'
import animData from '../images/circle_showcase.json'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'

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
        ReactGA.pageview(window.location.pathname + window.location.search)
        console.log(window.location.pathname + window.location.search)
    }, [])

    const p_detaildata = curlang.p_data.pr_showcase;
    const m_detaildata = curlang.m_data.pr_showcase;

    const [detailData, setDetailData] = useState(p_detaildata.session1);

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents 
                            title={p_detaildata.title} 
                            contents={p_detaildata.contents}
                        />
                    <PSectionArea>
                        <PLogoArea>
                            <PLogo1 onClick={(e)=>setDetailData(p_detaildata.session1)}>로고 1</PLogo1>
                            <PLogo2 onClick={(e)=>setDetailData(p_detaildata.session2)}>로고 2</PLogo2>
                            <PLogo3 onClick={(e)=>setDetailData(p_detaildata.session3)}>로고 3</PLogo3>
                            <PLogo4 onClick={(e)=>setDetailData(p_detaildata.session4)}>로고 4</PLogo4>
                            <PLogo5 onClick={(e)=>setDetailData(p_detaildata.session5)}>로고 5</PLogo5>
                            <PBackImg id="animArea" />
                        </PLogoArea>
                        <PDetailArea>
                            <PTextSection>
                                <PLogoImg>{detailData.img}</PLogoImg>
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
const PBackImg = styled.div`
    position : absolute;
    top : 0;
    width: 100%;
    height: 100%;
    background : green;
`
const PLogo1 = styled.button`
    position : absolute;
    width : 120px;
    height : 50px;
    margin-top : 100px;
    margin-left : 50px;
    z-index : 10;
`
const PLogo2 = styled.button`
    position : absolute;
    width : 120px;
    height : 50px;
    margin-top : 100px;
    margin-left : 250px;
    z-index : 10;
`
const PLogo3 = styled.button`
    position : absolute;
    width : 120px;
    height : 50px;
    margin-top : 250px;
    margin-left : 50px;
    z-index : 10;
`
const PLogo4 = styled.button`
    position : absolute;
    width : 120px;
    height : 50px;
    margin-top : 250px;
    margin-left : 350px;
    z-index : 10;
`
const PLogo5 = styled.button`
    position : absolute;
    width : 120px;
    height : 50px;
    margin-top : 350px;
    margin-left : 250px;
    z-index : 10;
`
const PDetailArea = styled.div`
    width : 600px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
`
const PTextSection = styled.div`
    width : 420px;
    height : auto;
    display :flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
const PLogoImg = styled.div`
    width : 80px;
    height : 24px;
    background: blue;
`
const PDetailData = styled.div`
    margin-top : 40px;
    margin-bottom : 30px;
    font-size: 16px;
    font-weight: 500;
    color: ${color.black};
`
const PMoreArea = styled.div`
    margin-top : 28px;
    width :158px;
    height : 32px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius: 20px;
    background-color: ${color.turtle_green};
`
const PMorebtn = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${color.white};
`
const PLink = styled(Link)`
    text-decoration : none;
`

export default _PreShowcase