import React from 'react'
import styled from 'styled-components'
import {withRouter } from 'react-router-dom'

const PlanSesionbtn = ({src, name, link}) => {
    return (
        <>
            <PLinkTag href={link}>
                <PWrapper>
                    <PImgArea>
                        <PlImg src={src} alt={name}/>
                    </PImgArea>
                </PWrapper>
            </PLinkTag>
        </>
    )
}

const PWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items: center;
    margin-bottom : 40px;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PImgArea = styled.div`
    cursor: pointer;
    width : 320px;
    height : 240px;
    display : flex;
    justify-content : center;
    align-items : center;
`
const PlImg = styled.img`
    transition: .6s;
    border-radius: 20px;
    padding : 27px 19px;
    &:hover {
        transform:scale(1.1);
        background : rgba(0,0,0, .04);
    }
`
const PLinkTag = styled.a`
    text-decoration : none !important;
`


export default withRouter(PlanSesionbtn)