import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../style/color'
import Fade from 'react-reveal/Fade'
import { useSelector } from 'react-redux'

const Personbtn = ({className, src, name, title}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const [hovered, setHovered] = useState(false)

    return (
        <>
            {/* Pc */}
            <PWrapper className={className}>
                    <PPrsImg 
                    onMouseEnter={(e) => setHovered(true)}
                    onMouseLeave={(e) => setHovered(false)}
                    title={title}>
                        <PWHover src={src} alt={name}>
                            <Fade 
                            duration={1000}
                            distance={'50%'}
                            when={hovered}>
                                <PWTitle>
                                    <PWTitleTxt>{title}</PWTitleTxt>
                                    <PWLinkTxt>{curlang.p_data.videobtn}</PWLinkTxt>
                                </PWTitle>
                            </Fade>
                            
                        </PWHover>
                    </PPrsImg>
                <PName>{name}</PName>
            </PWrapper>   
            
            
            {/* mobile */}
            <MWrapper className={className}>
                <MPrsImg src={src} alt={name} title={title}/>
                <MName>{name}</MName>
                <MTitle>{title}</MTitle>
                <MVideo>{curlang.m_data.videobtn}</MVideo>
            </MWrapper>   
        </>
       
    )
}

const PWrapper = styled.div`
    width : 375px;
    display : flex;
    flex-direction : column;
    align-items: center;
    margin-bottom : 48px;
    
    @media all and (max-width:1199px) {
        display : none;
    }
`

const PWHover = styled.div`
    width: 300px;
    height: 300px;
    overflow: hidden;
    transition: .6s;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image : url(${props => props.src});
    &:hover {
        transform:scale(1.1);
    }
`

const PWTitle = styled.div`
    width: 300px;
    height: 300px;
    background-color: rgba(0,0,0,0.50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const PWTitleTxt = styled.p`
    width : 240px;
    font-size: 20px;
    font-weight: bold;
    color: ${color.white};
    text-align : center;
    line-height : 1.5;
    margin-bottom: 0;
    word-break : keep-all;
`

const PWLinkTxt = styled.p`
    margin-top: 6px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom : 0px;
    color: ${color.white};
`

const PWLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: #fffa7d;
    position: absolute;
    bottom: 30%;
    left: 0;
`
const PImgoverflow = styled.div`
`

const PPrsImg = styled.div`
    width : 300px;
    height : 300px;
    position: relative;
    cursor: pointer;
    border-radius :150px;
    border: solid 3px transparent;
    overflow : hidden;
    transition: .6s;
    &:hover {
        /* border: solid 3px rgba(0,0,0,0.50); */
    }
`
const PName = styled.div`
    margin-top : 20px;
    font-size: 20px;
    font-weight: bold;
    color: ${color.black};
`

const MWrapper = styled.div`
    width : 100%;
    margin-bottom : 28px;
    
    @media all and (min-width: 1200px) {
        display : none;
    }
`
const MPrsImg = styled.div`
    cursor: pointer;
    width : 100%;
    height : 0;
    padding-top: 100%;
    border-radius : 50%;
    background : url(${props => props.src}) no-repeat center / cover;
    border: solid 3px ${color.white};
`
const MName = styled.div`
    margin-top : 11px;
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
    text-align: center;
    word-break : keep-all;
`
const MTitle = styled.div`
    margin : 2px 0 8px;
    font-size: 12px;
    color: ${color.black};
    text-align: center;
`
const MVideo = styled.div`
    font-size: 10px;
    color: #83b949;
    text-align: center;
`
export default Personbtn