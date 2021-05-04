import React from 'react'
import styled from 'styled-components'
import Videobtn from '../../../components/atom/Videobtn'
import { Link, withRouter } from 'react-router-dom';

const Pl_SectionData = ({className, title, time, name, enname, jop, link, discripton, imgs, location}) => {
    return (
        <>
            <PWrapper className={className}>
                <PSection>
                    <PImgArea>
                        <PImg src={imgs} alt={name} />
                    </PImgArea>
                    <PTextArea>
                        <PLeftArea location={location}>
                            <PTitle>{title}</PTitle>
                            <PTime>{time}</PTime>
                            <PName>{name}<PEnName>{enname}</PEnName></PName>
                            <PJop>{jop}</PJop>
                            <PDiscription>{discripton}</PDiscription>
                        </PLeftArea>
                        <PLink to={link}>
                            {location.pathname === '/unitwin/byob'
                            ? null
                            : <PVideobtn videobtn="true">영상보기</PVideobtn>}
                        </PLink>
                    </PTextArea>
                </PSection>
            </PWrapper>

            {/* mobile */}
            <MWrapper>
                <MInner>
                    <MImg src={imgs} alt={name} />
                    <MTitle>{title}</MTitle>
                    <MTime>{time}</MTime>
                    <MName>{name}</MName>
                    <MEnName>{enname}</MEnName>
                    <MJop>{jop}</MJop>
                </MInner>
            </MWrapper>
        </>

    )
}

// PC
const PWrapper = styled.div`
    height : 315px;
    padding : 0 20px 0 20px;
    border-bottom : 1px solid var(--turtle-green);
    display : flex;
    align-items : center;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PSection = styled.div`
    width : 100%;
    height : 235px;
    display : flex;
`
const PImgArea = styled.div`
    margin-right : 40px;
`
const PImg = styled.img`
    width : 235px;
    height : 235px;
`
const PTextArea = styled.div`
    width : 900px;
    display : flex;
    justify-content : space-between;
`
const PLeftArea = styled.div`
    width : 750px;
    padding-top : ${props => (props.location.pathname === '/unitwin/byob') ? '0px' : '26px'}
`
const PTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom : 8px;
    color: var(--black);
`
const PTime = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom : 40px;
    color: var(--black);
`
const PName = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom : 8px;
    color: var(--black);
`
const PEnName = styled.span`
    font-size: 14px;
    color: var(--brown-grey);
`
const PJop = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
`
const PVideobtn = styled(Videobtn)`
`
const PLink = styled(Link)`
    text-decoration : none;
`
const PDiscription = styled.div`
    margin-top :15px;
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
`


// Mobile
const MWrapper = styled.div`
    width : auto;
    padding : 40px 16px 40px 16px;
    border-bottom : 1px solid var(--turtle-green);
    display : flex;
    justify-content : center;
    
    @media all and (min-width:1200px) {
        display : none;
    }
`

const MInner = styled.div`
    display : flex;
    flex-direction : column;
    align-items :center;
`
const MImg = styled.img`
    width : 198px;
    height : 198px;
`
const MTitle = styled.div`
    margin-top : 28px;
    font-size: 16px;
    font-weight: bold;
    text-align : center;
    white-space: pre-line;
    color: var(--black);
`
const MTime = styled.div`
    margin-top : 8px;
    font-size: 14px;
    color: var(--black);
`
const MName = styled.div`
    margin-top : 18px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const MEnName = styled.div`
    margin-top : 2px;
    font-size: 14px;
    color: var(--brown-grey);
`
const MJop = styled.div`
    margin-top : 14px;
    font-size: 14px;
    color: var(--black);
`

export default withRouter(Pl_SectionData)