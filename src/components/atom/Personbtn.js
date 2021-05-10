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
                src={src} alt={name} title={title}>
                    <PWHover>
                        <Fade 
                        duration={800}
                        distance={'50%'}
                        bottom 
                        when={hovered}>
                            <PWTitle>
                                <PWLine></PWLine>
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
    position: absolute;
    top: 0;
    left: 0;
    border: solid 3px transparent;
    border-radius: 150px;
    overflow: hidden;
    transition: .6s;
    &:hover {
        border: solid 3px ${color.turtle_green};
        
    }
`

const PWTitle = styled.div`
    width: 300px;
    height: 300px;
    background: linear-gradient(0deg, rgba(131,185,73,0.80) 30%, rgba(255,255,255,0) 30%);    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`

const PWTitleTxt = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${color.white};
    white-space : pre-line;
    text-align : center;
    line-height : 1.5;
    margin-bottom: 0;
`

const PWLinkTxt = styled.p`
    margin-bottom: 18px;
    margin-top: 6px;
    font-size: 16px;
    font-weight: 500;
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
const PPrsImg = styled.div`
    position: relative;
    cursor: pointer;
    width : 300px;
    height : 300px;
    border-radius : 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image : url(${props => props.src});
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