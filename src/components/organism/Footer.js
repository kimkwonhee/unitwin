import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Footer = ({className, curlang, langkr, langen}) => {

    const p_detaildata = curlang.p_data.footer;
    const m_detaildata = curlang.m_data.footer;

    return (
        <>
            <PWrapper>
                <PInner>
                    <PSection1>
                        <PAddress>{p_detaildata.ftaddress}</PAddress>
                        <PLogoArea>
                            <PLogoA href={p_detaildata.logolink_a} target="_blank">
                                <PLogoImgA src={p_detaildata.ftlogo_1} alt={p_detaildata.ftlogo_1_alt} />
                            </PLogoA>
                            <PLogoB href={p_detaildata.logolink_b} target="_blank">
                                <PLogoImgB src={p_detaildata.ftlogo_2} alt={p_detaildata.ftlogo_2_alt} />
                            </PLogoB>
                        </PLogoArea>
                    </PSection1>
                    <PSection2>
                        <PContents>
                            <PTelphone>{p_detaildata.fttel}</PTelphone>
                            <PActiveTime>{p_detaildata.activetime}</PActiveTime>
                        </PContents>
                        <PPolicy href={m_detaildata.link} target="_blank">{p_detaildata.ftpolicy}</PPolicy>
                    </PSection2>
                </PInner>
                <PCopyright>{p_detaildata.ftcopyright}</PCopyright>
            </PWrapper>

            {/* mobile */}
            <MWrapper>
                <MCenter>
                    <MInner>
                        <MPolicy href={m_detaildata.link} target="_blank">{m_detaildata.ftpolicy}</MPolicy>
                        <MAddress>{m_detaildata.ftaddress}</MAddress>
                        <MTelphone>{m_detaildata.fttel}</MTelphone>
                        <MActiveTime>{m_detaildata.activetime}</MActiveTime>
                        <MLogoA href={m_detaildata.logolink_a} target="_blank">
                            <MLogoImgA src={m_detaildata.ftlogo_1} alt={m_detaildata.ftlogo_1_alt} />
                        </MLogoA>
                        <MLogoB href={m_detaildata.logolink_b} target="_blank">
                            <MLogoImgB src={m_detaildata.ftlogo_2} alt={m_detaildata.ftlogo_2_alt} />
                        </MLogoB>
                    </MInner>
                    <MCopyright>{m_detaildata.ftcopyright}</MCopyright>
                </MCenter>
            </MWrapper>
        </>
        
    )
}

// PC
const PWrapper = styled.div`
    width : 100%;
    padding : 60px 0px;
    background : ${color.black};
    display : flex;
    flex-direction : column;
    align-items : center;
    position : relative;
    z-index : 50;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    width : 1200px;
    padding-bottom : 40px;
    border-bottom : 1px solid ${color.brownish_grey};
`
const PSection1 = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    margin-bottom : 40px;
`
const PSection2 = styled.div`
    width : 100%;
    position : relative;
    display : flex;
`

const PAddress = styled.div`
    font-size: 16px;
    font-weight: bold;
    white-space: pre-line;
    color: ${color.white};
`
const PLogoArea = styled.div`
    display : flex;
`
const PLogoA = styled.a`
    margin-right : 30px;
`
const PLogoImgA = styled.img`
    width : 160px;
    height : 32px;
`
const PLogoB = styled.a`
`
const PLogoImgB = styled.img`
    width : 186px;
    height : 32px;
`
const PContents = styled.div`
`
const PTelphone = styled.div`
     font-size: 12px;
     font-weight: bold;
     color: #ffffff;
     margin-bottom : 8px;
`
const PActiveTime = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
`
const PPolicy = styled.a`
    position : absolute;
    right : 0;
    bottom : 0;
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
    cursor: pointer;

    &:hover {
        color: ${color.turtle_green};
    }
`
const PCopyright = styled.div`
     font-size: 12px;
     text-align: center;
     color: ${color.white};
     margin-top : 20px;
`


// mobile
const MWrapper = styled.div`
    width : auto;
    padding : 28px 16px 60px 16px; 
    display : flex;
    justify-content : center;
    background : ${color.black};

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    padding-bottom : 60px;
    border-bottom : 1px solid ${color.brown_grey};
    display : flex;
    flex-direction : column;
`
const MCenter = styled.div`
    width : 375px;
`
const MPolicy = styled.a`
    font-size: 12px;
    font-weight: bold;
    color: ${color.turtle_green};
    cursor: pointer;

    &:hover {
        color: ${color.turtle_green};
    }
`
const MAddress = styled.div`
    margin-top : 49px;
    font-size: 12px;
    font-weight: 500;
    white-space: pre-line;
    color: ${color.white};
`
const MTelphone = styled.div`
    margin-top : 20px;
     font-size: 12px;
     color: #ffffff;
`
const MActiveTime = styled.div`
    margin-top : 4px;
    font-size: 12px;
    color: ${color.white};
`
const MLogoA = styled.a`
    margin-top : 40px;
`
const MLogoImgA = styled.img`
    width : 120px;
    height : 24px;
`
const MLogoB = styled.a`
    margin-top : 12px;
`
const MLogoImgB = styled.img`
    width : 140px;
    height : 24px;
`
const MCopyright = styled.div`
    margin-top : 20px;
    font-size: 10px;
    color: ${color.white};
`
export default Footer