import React from 'react'
import styled from 'styled-components'
import logo1 from '../../images/footer_logo1.png'
import logo2 from '../../images/footer_logo2.png'

const Footer = () => {

    const p_topcontents = {
        address : '제4회 유네스코 유니트윈 학술대회 운영사무국 (주)프럼에이 (105-87-52236)\n서울 마포구 성미산로23길 30-5',
        tel : '대표전화 | 02-733-1399',
        time : '운영시간 | 월-금 10:00 - 19:00 (주말, 공휴일 휴무)',
        logo_1 : logo1,
        logo_1_alt : '문화체육관광부',
        logo_2 : logo2,
        logo_2_alt : '한국문화예술교육진흥원',
        policy : '개인정보처리방침',
        copyright : 'Copyright ⓒ KOREA ARTS & CULTURE EDUCATION SERVICE. All Rights Reserved.'
    }

    const m_topcontents = {
        address : '세계문화예술교육 주간 운영사무국 (주)프럼에이 (105-87-52236)\n서울 마포구 성미산로23길 30-5',
        tel : '대표전화 | 02-733-1399',
        time : '운영시간 | 월-금 10:00 - 19:00 (주말, 공휴일 휴무)',
        logo_1 : logo1,
        logo_2 : logo2,
        policy : '개인정보처리방침',
        copyright : 'ⓒ KOREA ARTS & CULTURE EDUCATION SERVICE. All Rights Reserved.'
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    <PSection1>
                        <PAddress>{p_topcontents.address}</PAddress>
                        <PLogoArea>
                            <PLogoA>
                                <PLogoImgA src={p_topcontents.logo_1} alt={p_topcontents.logo_1_alt} />
                            </PLogoA>
                            <PLogoB>
                                <PLogoImgB src={p_topcontents.logo_2} alt={p_topcontents.logo_2_alt} />
                            </PLogoB>
                        </PLogoArea>
                    </PSection1>
                    <PSection2>
                        <PContents>
                            <PTelphone>{p_topcontents.tel}</PTelphone>
                            <PActiveTime>{p_topcontents.time}</PActiveTime>
                        </PContents>
                        <PPolicy>{p_topcontents.policy}</PPolicy>
                    </PSection2>
                </PInner>
                <PCopyright>{p_topcontents.copyright}</PCopyright>
            </PWrapper>

            {/* mobile */}
            <MWrapper>
                <MCenter>
                    <MInner>
                        <MPolicy>{m_topcontents.policy}</MPolicy>
                        <MAddress>{m_topcontents.address}</MAddress>
                        <MTelphone>{m_topcontents.tel}</MTelphone>
                        <MActiveTime>{m_topcontents.time}</MActiveTime>
                        <MLogoA>
                            <MLogoImgA src={m_topcontents.logo_1} alt={m_topcontents.logo_1_alt} />
                        </MLogoA>
                        <MLogoB>
                            <MLogoImgB src={m_topcontents.logo_2} alt={m_topcontents.logo_2_alt} />
                        </MLogoB>
                    </MInner>
                    <MCopyright>{m_topcontents.copyright}</MCopyright>
                </MCenter>
            </MWrapper>
        </>
        
    )
}

// PC
const PWrapper = styled.div`
    width : 100%;
    padding : 60px 0px;
    background : var(--black);
    display : flex;
    flex-direction : column;
    align-items : center;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    width : 1200px;
    padding-bottom : 40px;
    border-bottom : 1px solid var(--brownish-grey);
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
    color: var(--white);
`
const PLogoArea = styled.div`
    display : flex;
`
const PLogoA = styled.div`
    margin-right : 30px;
`
const PLogoImgA = styled.img`
    width : 160px;
    height : 32px;
`
const PLogoB = styled.div`
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
    color: var(--turtle-green);
    cursor: pointer;
`
const PCopyright = styled.div`
     font-size: 12px;
     text-align: center;
     color: var(--white);
     margin-top : 20px;
`


// mobile
const MWrapper = styled.div`
    width : auto;
    padding : 28px 16px 60px 16px; 
    display : flex;
    justify-content : center;
    background : var(--black);

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    padding-bottom : 60px;
    border-bottom : 1px solid var(--brownish-grey);
`
const MCenter = styled.div`
    width : 375px;
`
const MPolicy = styled.a`
    font-size: 12px;
    font-weight: bold;
    color: var(--turtle-green);
    cursor: pointer;
`
const MAddress = styled.div`
    margin-top : 49px;
    font-size: 12px;
    font-weight: 500;
    white-space: pre-line;
    color: var(--white);
`
const MTelphone = styled.div`
    margin-top : 20px;
     font-size: 12px;
     color: #ffffff;
`
const MActiveTime = styled.div`
    margin-top : 4px;
    font-size: 12px;
    color: var(--white);
`
const MLogoA = styled.div`
    margin-top : 40px;
`
const MLogoImgA = styled.img`
    width : 120px;
    height : 24px;
`
const MLogoB = styled.div`
    margin-top : 12px;
`
const MLogoImgB = styled.img`
    width : 140px;
    height : 24px;
`
const MCopyright = styled.div`
    margin-top : 20px;
    font-size: 10px;
    color: var(--white);
`
export default Footer