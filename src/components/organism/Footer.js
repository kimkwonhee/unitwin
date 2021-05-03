import React from 'react'
import styled from 'styled-components'
import logo1 from '../../images/footer_logo1.png'
import logo2 from '../../images/footer_logo2.png'

const Footer = () => {
    return (
        <Wrapper>
            <Inner>
                <Section1>
                    <Address>
                        세계문화예술교육 주간 운영사무국 (주)프럼에이 (105-87-52236)<br />
                        서울 마포구 성미산로23길 30-5
                    </Address>
                    <LogoArea>
                        <LogoA>
                            <img src={logo1} alt="문화체육관광부" />
                        </LogoA>
                        <LogoB>
                            <img src={logo2} alt="한국문화예술교육진흥원" />
                        </LogoB>
                    </LogoArea>
                </Section1>
                <Section2>
                    <Contents>
                        <Telphone>대표전화 | 02-733-1399</Telphone>
                        <ActiveTime>운영시간 | 월-금 10:00 - 19:00 (주말, 공휴일 휴무)</ActiveTime>
                    </Contents>
                    <Policy>개인정보처리방침</Policy>
                </Section2>
            </Inner>
            <Copyright>Copyright ⓒ KOREA ARTS & CULTURE EDUCATION SERVICE. All Rights Reserved. </Copyright>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 328px;
    background : var(--black);
    display : flex;
    flex-direction : column;
    align-items : center;
`

const Inner = styled.div`
    width : 1200px;
    height : 170px;
    margin-top : 60px;
    border-bottom : 1px solid var(--brownish-grey);
`

const Section1 = styled.div`
    width : 100%;
    height : 48px;
    display : flex;
    justify-content : space-between;
    margin-bottom : 40px;
`

const Address = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
`

const LogoArea = styled.div`
    display : flex;
`

const LogoA = styled.div`
    width : 160px;
    height : 32px;
    margin-right : 30px;
`

const LogoB = styled.div`
    width : 186px;
    height : 32px;
`

const Section2 = styled.div`
    width : 100%;
    height : 42px;
    position : relative;
    display : flex;
`

const Contents = styled.div`
`

const Telphone = styled.div`
     font-size: 12px;
     font-weight: bold;
     color: #ffffff;
     margin-bottom : 8px;
`
const ActiveTime = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
`

const Policy = styled.a`
    position : absolute;
    right : 0;
    bottom : 0;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
    cursor: pointer;
`

const Copyright = styled.div`
     font-size: 12px;
     text-align: center;
     color: var(--white);
     margin-top : 20px;
`

export default Footer