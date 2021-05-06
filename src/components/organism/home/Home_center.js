import React, { useState } from 'react'
import styled from 'styled-components'
import Calendarbtn from '../../atom/Calendarbtn'
import PageTopArea from '../../molecules/PageTopArea'
import Home_all from './Home_all'
import Home_day1 from './Home_day1'
import Home_day2 from './Home_day2'
import Home_day3 from './Home_day3'

const Home_center = ({curlang}) => {
    const p_detaildata = curlang.p_data.home_center;
    const m_detaildata = curlang.m_data.home_center;

    const [cal, setCal] = useState(<Home_all />);
    const [status, setStatus] = useState(1);

    const onClick = (site, number) => {
        setCal(site);
        setStatus(number);
    }   

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents 
                            title={p_detaildata.title} 
                            contents={p_detaildata.contents}
                            subfontsize="20px"
                        />
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
            
            <MWrapper>
                <MInner>
                    <MContents 
                            title={m_detaildata.title} 
                            contents={m_detaildata.contents}
                            subfontsize="20px"
                        />
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
const PContents = styled(PageTopArea)`
    margin-top : 100px;
    margin-bottom : 100px;
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