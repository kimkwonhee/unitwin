import React from 'react'
import styled from 'styled-components'
import hoverbtn from '../../images/session_hover.png'

const Personbtn = ({src, name, title}) => {
    return (
        <>
            <PWrapper>
                <PPrsImg src={src} alt={name} title={title}/>
                <PName>{name}</PName>
            </PWrapper>   
        </>
       
    )
}

const PWrapper = styled.div`
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

export default Personbtn