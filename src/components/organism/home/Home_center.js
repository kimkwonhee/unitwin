import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../../style/color'
import Calendarbtn from '../../atom/Calendarbtn'
import PageTopArea from '../../molecules/PageTopArea'
import Home_all from './Home_all'
import Home_day1 from './Home_day1'
import Home_day2 from './Home_day2'
import Home_day3 from './Home_day3'
import timeimg from '../../../images/time_img.png'

const Home_center = ({curlang}) => {
    const p_detaildata = curlang.p_data.home_center;
    const m_detaildata = curlang.m_data.home_center;

    const [cal, setCal] = useState(<Home_all />);
    const [status, setStatus] = useState(1);

    const onClick = (site, number) => {
        setCal(site);
        setStatus(number);
    }

    let langstatus = curlang.status

    return (
        <>
            {/* PC */}
            <PWrapper>
                <PInner>
                    <PContents 
                            title={p_detaildata.title} 
                            contents={p_detaildata.contents}
                            subfontsize="20px"
                        />
                        <PTimeArea>
                            <PTimeBaseText>{curlang.p_data.basetimetext}</PTimeBaseText>
                            <PTimeChangebtn href="https://www.thetimezoneconverter.com/" target="_blank">
                                <PTimeImg src={timeimg} alt="time"/>
                                <PTimeChangeText>{curlang.p_data.timechang}</PTimeChangeText>
                            </PTimeChangebtn>
                        </PTimeArea>
                    <PSection1>
                        <Calendarbtn 
                            id="1"
                            title="All" 
                            calendar="05.24 ~ 05.26"
                            status={status}
                            onClick={(e)=> onClick(<Home_all />, 1)} />
                        <Calendarbtn
                            id="2"
                            title="Day 1" 
                            calendar="05.24 Mon"
                            status={status}
                            onClick={(e)=> onClick(<Home_day1 />, 2)} />
                        <Calendarbtn
                            id="3"
                            title="Day 2" 
                            calendar="05.25 Tue"
                            status={status}
                            onClick={(e)=> onClick(<Home_day2 />, 3)} />
                        <Calendarbtn
                            id="4" 
                            title="Day 3" 
                            calendar="05.26 Wed"
                            status={status}
                            onClick={(e)=> onClick(<Home_day3 />, 4)} />
                    </PSection1>
                    <PSection2>
                        {cal}
                    </PSection2>
                </PInner>
            </PWrapper>
            
            {/* mobile */}
            <MWrapper>
                <MInner>
                    <MContents 
                            title={m_detaildata.title} 
                            contents={m_detaildata.contents}
                            subfontsize="20px"
                        />
                    <MTimeBaseText>{curlang.p_data.basetimetext}</MTimeBaseText>
                    <MTimeChangebtn status={langstatus} href="https://www.thetimezoneconverter.com/" target="_blank">
                        <MTimeImg src={timeimg} alt="time"/>
                        <MTimeChangeText>{curlang.p_data.timechang}</MTimeChangeText>
                    </MTimeChangebtn>
                    <MSection1>
                        <Calendarbtn 
                            id="1"
                            title="All" 
                            calendar="05.24 ~ 05.26"
                            status={status}
                            onClick={(e)=> onClick(<Home_all />, 1)} />
                        <Calendarbtn
                            id="2"
                            title="Day 1" 
                            calendar="05.24 Mon"
                            status={status}
                            onClick={(e)=> onClick(<Home_day1 />, 2)} />
                        <Calendarbtn
                            id="3"
                            title="Day 2" 
                            calendar="05.25 Tue"
                            status={status}
                            onClick={(e)=> onClick(<Home_day2 />, 3)} />
                        <Calendarbtn
                            id="4" 
                            title="Day 3" 
                            calendar="05.26 Wed"
                            status={status}
                            onClick={(e)=> onClick(<Home_day3 />, 4)} />
                    </MSection1>
                    <MSection2>
                        {cal}
                    </MSection2>
                </MInner>
            </MWrapper>
        </>
  
    )
}

// PC
const PWrapper = styled.div`
    width : auto;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    width : 1200px;
`
const PTimeArea = styled.div`
    margin-top : 16px;
    margin-bottom : 40px;
    display : flex;
    justify-content : space-between;
`
const PContents = styled(PageTopArea)`
    margin-top : 100px;
`
const PTimeImg = styled.img`
    width : 20px;
    height : 20px;
    margin-right : 8px;
`
const PTimeBaseText = styled.div`
     font-size: 16px;
     font-weight: 500;
     color: #e43c00;
`
const PTimeChangebtn = styled.a`
    padding : 8px 35px;
    background-color: ${color.turtle_green};
    display : flex;
    justify-content : center;
    align-items : center;
    transition : .6s;
    &:hover {
        opacity : 0.8;
    }
`
const PTimeChangeText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.white};
`


const PSection1 = styled.div`
    display : flex;
    justify-content : space-between;
`
const PSection2 = styled.div`
    width : 1200px;
    margin-top : 60px;
`

// Mobile
const MWrapper = styled.div`
    width : auto;
    padding : 0 16px 50px 16px;
    display : flex;
    justify-content : center;
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MTimeBaseText = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #e43c00;
`

const MTimeChangebtn = styled.a`
    width : ${props => props.status === 'kr' ? '177px' : '250px;'};
    height : 36px;
    margin-top : 12px;
    margin-bottom : 20px;
    background-color: ${color.turtle_green};
    display : flex;
    justify-content : center;
    align-items : center;
    transition : .6s;
    &:hover {
        opacity : 0.8;
    }
`
const MTimeImg = styled.img`
    width : 20px;
    height : 20px;
    margin-right : 8px;
`

const MTimeChangeText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.white};
`
const MInner = styled.div`
    position : relative;
    width : 375px;
`
const MContents = styled(PageTopArea)`
    margin-top : 40px;
    margin-bottom : 20px;
`
const MSection1 = styled.div`
    display : flex;
    justify-content : center;
`
const MSection2 = styled.div`
`

export default Home_center