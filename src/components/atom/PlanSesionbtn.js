import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import color from '../../style/color'

const PlanSesionbtn = ({src, name,discription, link}) => {
    return (
        <>
            <PWrapper>
                <PLinkTag to={link}>
                    <PImgArea>
                        <PlImg src={src} alt={name}/>
                    </PImgArea>
                </PLinkTag>
                    <PName>{name}</PName>
                    <PDiscription>{discription}</PDiscription>
            </PWrapper>
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
    border-radius : 50%;
    background : url(${props => props.src});
    border: solid 3px ${color.white};

    &:hover {
        border: solid 3px ${color.turtle_green};
    }
`
const PlImg = styled.img`
    width : 180px;
    height : 180px;
`
const PName = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PDiscription = styled.div`
    margin-top : 8px;
    font-size: 12px;
    color: ${color.black};
`
const PLinkTag = styled(Link)`
    text-decoration : none !important;
`

export default PlanSesionbtn