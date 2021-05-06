import React from 'react'
import styled from 'styled-components'
import hoverbtn from '../../images/session_hover.png'

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
    background : url(${props => props.src});
    border: solid 3px var(--white);

    &:hover {
        border: solid 3px var(--turtle-green);
        &:before {
            content: "${props => props.title}";
            width: 275px;
            text-align: center;
            position: absolute;
            margin-top: 217px;
            margin-left: 11px;
            z-index: 6;
            color: var(--white);
        }
        
        &:after {
            content :"";
            position : absolute;
            margin-top: 206px;
            margin-left: 11px;
            width : 300px;
            height : 300px;
            z-index : 5;
            background : url(${hoverbtn});
            background-repeat : no-repeat;
        }  
    }
`
const PName = styled.div`
    margin-top : 20px;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
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
    border: solid 3px var(--white);
`
const MName = styled.div`
    margin-top : 11px;
    font-size: 14px;
    font-weight: bold;
    color: var(--black);
    text-align: center;
`
const MTitle = styled.div`
    margin : 2px 0 8px;
    font-size: 12px;
    color: var(--black);
    text-align: center;
`
const MVideo = styled.div`
    font-size: 10px;
    color: #83b949;
    text-align: center;
`
export default Personbtn