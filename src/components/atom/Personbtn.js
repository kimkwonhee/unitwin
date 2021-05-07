import React from 'react'
import styled from 'styled-components'
import hoverbtn from '../../images/session_hover.png'
import color from '../../style/color'

const Personbtn = ({className, src, name, title}) => {
    return (
        <>
            {/* Pc */}
            <PWrapper className={className}>
                <PPrsImg src={src} alt={name} title={title}/>
                <PName>{name}</PName>
            </PWrapper>   
            
            
            {/* mobile */}
            <MWrapper className={className}>
                <MPrsImg src={src} alt={name} title={title}/>
                <MName>{name}</MName>
                <MTitle>{title}</MTitle>
                <MVideo>영상보기 &gt;</MVideo>
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
const PPrsImg = styled.div`
    cursor: pointer;
    width : 300px;
    height : 300px;
    border-radius : 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image : url(${props => props.src});
    border: solid 3px transparent;

    &:hover {
        border: solid 3px ${color.turtle_green};
        
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