import React from 'react'
import styled from 'styled-components'
import Videobtn from '../../../components/atom/Videobtn'
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'
import color from '../../../style/color'
import env from '../../../modules/env'

const Pl_SectionData = ({
    className, 
    title, 
    time, 
    name, 
    enname, 
    jop, 
    link, 
    discripton, 
    imgs, 
    location
    }) => {
    
        const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const p_video_text = curlang.p_data.pl_session.video_text;
    const m_video_text = curlang.m_data.pl_session.video_text;
    
    return (
        <>
            <PWrapper className={className}>
                <PSection>
                    <PImgArea>
                        <PImg src={imgs} alt={name} />
                    </PImgArea>
                    <PTextArea>
                        <PLeftArea location={location}>
                            <div>
                                {location.pathname === env.path+'/byob'
                                ? null
                                : <PTitle>{title}</PTitle>}
                                {location.pathname === env.path+'/byob'
                                ? null
                                : <PTime>{time}</PTime>}
                                <PName>{name}<PEnName>{enname}</PEnName></PName>
                                <PJop>{jop}</PJop>
                                <PDiscription>{discripton}</PDiscription>
                            </div>
                            <PLink to={link}>
                            {location.pathname === env.path+'/byob' 
                            ? null 
                            : <PVideobtn videobtn="true" videotext={p_video_text} />}
                            </PLink>
                        </PLeftArea>
                    </PTextArea>
                </PSection>
            </PWrapper>

            {/* mobile */}
            <MWrapper>
                <MInner>
                    <MImg src={imgs} alt={name} />
                    <MTitle location={location}>{title}</MTitle>
                    {location.pathname === env.path+'/byob'
                    ? null : <MTime>{time}</MTime>}
                    <MName>{name}</MName>
                    <MEnName>{enname}</MEnName>
                    {location.pathname === env.path+'/byob'
                    ? <MJop>{jop}</MJop>
                    : null}
                    <MDiscription location={location}>{discripton}</MDiscription>
                    <MLink to={link}>
                            {location.pathname === env.path+'/byob'
                            ? null
                            : <MVideobtn width="92px" videobtn="true" videotext={m_video_text} />}
                    </MLink>
                </MInner>
            </MWrapper>
        </>

    )
}

// PC
const PWrapper = styled.div`
    padding : 40px 20px;
    border-bottom : 1px solid ${color.turtle_green};
    display : flex;
    align-items : center;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PSection = styled.div`
    width : 100%;
    display : flex;
`
const PImgArea = styled.div`
    width : 275px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`
const PImg = styled.img`
    width : 235px;
    height : 235px;
    border-radius : 50%;
`
const PTextArea = styled.div`
    width : 900px;
    display : flex;
    align-items : center;
`
const PLeftArea = styled.div`
    width : ${props => (props.location.pathname === env.path+'/byob') ? 'auto' : '100%'};
    padding-top : ${props => (props.location.pathname === env.path+'/byob') ? '0px' : '0px'};
    display : flex;
    justify-content : space-between;
`
const PTitle = styled.div`
    width : 700px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom : 8px;
    white-space : pre-line;
    word-break : keep-all;
    color: ${color.black};
`
const PTime = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom : 40px;
    color: ${color.black};
`
const PName = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom : 8px;
    color: ${color.black};
`
const PEnName = styled.span`
    font-size: 14px;
    color: ${color.brown_grey};
`
const PJop = styled.div`
    font-size: 14px;
    font-weight: 500;
    word-break : keep-all;
    color: ${color.black};
`
const PVideobtn = styled(Videobtn)`
`
const PLink = styled(Link)`
    text-decoration : none;
    height : 36px;
`
const PDiscription = styled.div`
    margin-top :15px;
    font-size: 14px;
    font-weight: 400;
    white-space : pre-line;
    color: ${color.black};
`


// Mobile
const MWrapper = styled.div`
    width : auto;
    padding : 40px 16px 40px 16px;
    border-bottom : 1px solid ${color.turtle_green};
    display : flex;
    justify-content : center;
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items :center;
`
const MImg = styled.img`
    width : 198px;
    height : 198px;
    border-radius : 50%;
    margin-bottom : 28px;
`
const MTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-align : center;
    white-space: pre-line;
    color: ${color.black};
    line-height: 1.5;
    margin-bottom : 8px;
`
const MTime = styled.div`
    font-size: 14px;
    color: ${color.black};
    margin-bottom : 18px;
`
const MName = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 2px;
`
const MEnName = styled.div`
    font-size: 14px;
    color: ${color.brown_grey};
    margin-bottom : 14px;
`
const MJop = styled.div`
    font-size: 14px;
    color: ${color.black};
    white-space: pre-line;
    word-break : keep-all;
    text-align : center;
    line-height: 1.5;
    margin-bottom : 18px;
`
const MDiscription = styled.div`
    width: 100%;
    font-size: 12px;
    line-height: 1.5;
    text-align : center;
    word-break : keep-all;
    margin-bottom : ${props => props.location.pathname === env.path+'/byob' ? '0px': '28px' }
`
const MVideobtn = styled(Videobtn)`
    width : 92px;
    height : 36px;
    div {
        font-size: 14px !important;
    }
`
const MLink = styled(Link)`
    text-decoration : none;
`

export default withRouter(Pl_SectionData)